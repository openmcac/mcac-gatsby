import queryString from "query-string"
import { pathToRegexp } from "path-to-regexp"

class Route {
  constructor(template) {
    this.template = template
  }

  url = (params = {}) => buildUrl(this.template, params)

  params = url => {
    const keys = []
    const regexp = pathToRegexp(this.template, keys)

    if (keys.length === 0) {
      return {}
    }

    const tokens = (regexp.exec(url) || []).slice(1)

    return keys.reduce((acc, key, index) => {
      acc[key.name] = tokens[index]
      return acc
    }, {})
  }

  isCurrent = url => {
    const params = this.params(url)
    return this.url(params) === url
  }
}

const buildRoute = template => new Route(template)

export const groupRoute = buildRoute("/:slug")
export const postRoute = buildRoute("/:group/:year/:month/:day/:id/:slug")

export const buildUrl = (template, params = {}) =>
  Object.keys(params).reduce((url, current) => {
    if (Array.isArray(params[current]) && params[current].length === 0) {
      return url
    }

    if (
      params[current] === null ||
      params[current] === "" ||
      typeof params[current] === "undefined"
    ) {
      return url
    }

    if (url.indexOf(`:${current}`) > -1) {
      return url.replace(`:${current}`, params[current])
    }

    if (url.indexOf("?") > -1) {
      return `${url}&${queryString.stringify({ [current]: params[current] })}`
    }

    return `${url}?${queryString.stringify({ [current]: params[current] })}`
  }, template)

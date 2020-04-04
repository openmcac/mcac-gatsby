import Banner from "../common/banner"
import Markdown from "react-markdown"
import Moment from "react-moment"
import React from "react"
import { Link } from "@reach/router"
import { groupRoute, postRoute } from "../common/url-helper"

const Metadata = ({ post }) => {
  const publishedAt = new Date(post.publishedAt)

  return (
    <div className="flex flex-row items-center">
      <img
        className="rounded-full h-16 md:h-20 w-16 md:w-20"
        src={post.group.profilePictureUrl}
      />
      <div className="ml-2 text-sm md:text-base">
        <div className="font-semibold tracking-wide text-gray-700">
          <Link className="border-0" to={groupRoute.url({ slug: post.group.slug })}>
            {post.group.name}
          </Link>
        </div>
        <Link
          className="border-0"
          to={postRoute.url({ group: post.group.slug, year: publishedAt.getFullYear(), month: publishedAt.getMonth() + 1, day: publishedAt.getDate(), id: post.id, slug: post.slug })}>
          <Moment className="text-gray-500" format="MMMM Do YYYY [at] h:mma">
            {post.publishedAt}
          </Moment>
        </Link>
      </div>
    </div>
  )
}

const Post = ({ post }) => {
  const renderers = {
    paragraph: ({ children }) => <p className="mb-4 lg:mb-6">{children}</p>,
    listItem: ({ children }) => <li className="ml-6">{children}</li>,
    list: ({ children }) => <ul className="list-disc mb-4 lg:mb-6">{children}</ul>,
    link: props => <a {...props} className="border-gray-700 text-black" />,
  }

  return (
    <div>
      <Banner backgroundUrl={post.bannerUrl}>
        <div className="h-full w-full flex items-center">
          <h1 className="mx-auto text-white text-2xl md:text-3xl tracking-wide text-center">
            <span className="bg-gray-900 px-2 py-1">{post.title}</span>
          </h1>
        </div>
      </Banner>
      <div className="max-w-2xl mx-auto">
        <div className="my-8 lg:my-12 mx-2">
          <Metadata post={post} />
        </div>
        <div className="mx-2 text-gray-900 md:text-lg">
          <Markdown source={post.content} renderers={renderers} />
        </div>
      </div>
    </div>
  )
}

export default Post


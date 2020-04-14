import "moment-timezone"
import Banner from "../common/banner"
import Loading from "../common/loading"
import Markdown from "react-markdown"
import Moment from "react-moment"
import React from "react"
import Show from "../common/show"
import gql from "graphql-tag"
import { FaCertificate as FooterIcon } from "react-icons/fa"
import { Link } from "@reach/router"
import { groupRoute, postRoute } from "../common/url-helper"
import { useQuery } from "@apollo/react-hooks"

const FETCH_POST = gql`
  query showPost($id: ID!) {
    post(id: $id) {
      id
      title
      content
      publishedAt
      bannerUrl
      kind
      slug

      group {
        id
        name
        slug
        bannerUrl
        profilePictureUrl
      }
    }
  }
`

const Metadata = ({ post, group }) => {
  const publishedAt = new Date(post.publishedAt)

  return (
    <div className="flex flex-row items-center">
      <img
        className="rounded-full h-16 md:h-20 w-16 md:w-20"
        src={group.profilePictureUrl}
      />
      <div className="ml-2 text-sm md:text-base">
        <div className="font-semibold tracking-wide text-gray-700">
          <Link className="border-0" to={groupRoute.url({ slug: group.slug })}>
            {group.name}
          </Link>
        </div>
        <Link
          className="border-0"
          to={postRoute.url({ group: group.slug, year: publishedAt.getFullYear(), month: publishedAt.getMonth() + 1, day: publishedAt.getDate(), id: post.id, slug: post.slug })}>
          <Moment className="text-gray-500" format="MMMM Do YYYY [at] h:mma" tz="America/Montreal">
            {post.publishedAt}
          </Moment>
        </Link>
      </div>
    </div>
  )
}

const Post = ({ id }) => {
  const { data, loading, error } = useQuery(FETCH_POST, { variables: { id } })

  if (loading || error) {
    return <Loading />
  }

  const { post } = data

  return <Post.Content post={post} group={post.group} />
}

Post.Content = ({ post, group }) => {
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
          <Show show={post.title}>
            <h1 className="mx-auto text-white text-2xl md:text-3xl tracking-wide text-center">
              <span className="bg-gray-900 px-2 py-1">{post.title}</span>
            </h1>
          </Show>
        </div>
      </Banner>
      <div className="max-w-2xl mx-auto">
        <div className="my-8 lg:my-12 mx-2">
          <Metadata post={post} group={group} />
        </div>
        <div className="mx-2 text-gray-900 md:text-lg">
          <Markdown source={post.content} renderers={renderers} escapeHtml={false} />
        </div>
        <div className="text-gray-200 text-2xl mt-12 sm:mt-16 md:mt-20 mb-24 sm:mb-32 md:mb-40"><FooterIcon className="mx-auto" /></div>
      </div>
    </div>
  )
}

export default Post


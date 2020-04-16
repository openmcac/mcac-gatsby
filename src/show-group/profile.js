import Header from "../groups/header"
import InfiniteScroll from "react-infinite-scroller"
import Loading from "../common/loading"
import Post from "../show-post/post"
import React, { useState } from "react"
import Spinner from "../common/spinner"
import gql from "graphql-tag"
import { Helmet } from "react-helmet"
import { useApolloClient, useQuery } from "@apollo/react-hooks"

const LOAD_GROUP = gql`
  query groupProfile($slug: String!, $afterPostCursor: String) {
    group(slug: $slug) {
      id
      name
      slug
      shortDescription
      meetDetails
      targetAudience
      bannerUrl
      profilePictureUrl
      posts(after: $afterPostCursor) {
        edges {
          cursor
          node {
            id
            title
            content
            publishedAt
            bannerUrl
            kind
            slug
          }
        }

        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`

const Profile = ({ slug }) => {
  const { data, error, loading } = useQuery(LOAD_GROUP, { variables: { slug } })
  const client = useApolloClient()

  if (error || loading) {
    return <Loading />
  }

  const { group } = data

  const onLoadMore = cursor => {
    return client.query({
      query: LOAD_GROUP,
      variables: { slug, afterPostCursor: cursor }
    })
  }

  return (
    <>
      <Helmet>
        <title>{group.name} | Montreal Chinese Alliance Church</title>
      </Helmet>
      <ProfileContents group={group} onLoadMore={onLoadMore} />
    </>
  )
}

const ProfileContents = ({ group, onLoadMore }) => {
  const [posts, setPosts] = useState(group.posts.edges.map(({ node }) => node))
  const [paginationInfo, setPaginationInfo] = useState(group.posts.pageInfo)

  const handleLoadMore = async () => {
    const { data: { group: { posts: newPosts } } } = await onLoadMore(paginationInfo.endCursor)
    setPosts(posts.concat(newPosts.edges.map(({ node }) => node)))
    setPaginationInfo(newPosts.pageInfo)
  }

  return (
    <div>
      <Header group={group} />

      <div className="container mx-auto mt-12">
        <InfiniteScroll
          loadMore={handleLoadMore}
          hasMore={paginationInfo.hasNextPage}
          loader={<div className="text-center text-gray-500 uppercase tracking-widest"><Spinner /></div>}>
          {posts.map(post => (
            <div key={post.id} className="mt-6">
              <Post.Contents post={post} group={group} />
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  )
}

Profile.Contents = ProfileContents

export default Profile


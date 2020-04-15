import Header from "../groups/header"
import Loading from "../common/loading"
import Post from "../show-post/post"
import React from "react"
import gql from "graphql-tag"
import { Helmet } from "react-helmet"
import { useQuery } from "@apollo/react-hooks"

const LOAD_GROUP = gql`
  query groupProfile($slug: String!) {
    group(slug: $slug) {
      id
      name
      slug
      shortDescription
      meetDetails
      targetAudience
      bannerUrl
      profilePictureUrl
      posts {
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
      }
    }
  }
`

const Profile = ({ slug }) => {
  const { data, error, loading } = useQuery(LOAD_GROUP, { variables: { slug } })

  if (error || loading) {
    return <Loading />
  }

  const { group } = data

  return <Profile.Contents group={group} />
}

Profile.Contents = ({ group }) => {
  return (
    <div>
      <Helmet>
        <title>{group.name} | Montreal Chinese Alliance Church</title>
      </Helmet>
      <Header group={group} />

      <div className="container mx-auto mt-12">
        {group.posts.edges.map(({ node: post }) => (
          <div key={post.id} className="mt-6">
            <Post.Contents post={post} group={group} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile


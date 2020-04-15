import Loading from "../common/loading"
import React from "react"
import Service from "./service"
import gql from "graphql-tag"
import { Helmet } from "react-helmet"
import { useQuery } from "@apollo/react-hooks"

const FETCH_NEXT_SERVICE = gql`
  query sunday {
    group(slug: "english-service") {
      id
      bulletins(first: 1) {
        edges {
          node {
            id
            name
            serviceOrder
            sermonNotes
            publishedAt
            announcements {
              id
              description
            }
          }
        }
      }
    }
  }
`

const Sunday = () => {
  const { loading, error, data } = useQuery(FETCH_NEXT_SERVICE)

  if (loading || error) {
    return <Loading />
  }

  const { group } = data

  return (
    <>
      <Helmet>
        <title>Sunday | Montreal Chinese Alliance Church</title>
      </Helmet>
      <Service.Contents service={group.bulletins.edges[0].node} />
    </>
  )
}

export default Sunday


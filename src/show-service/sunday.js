import Loading from "../common/loading"
import React from "react"
import Service from "./service"
import gql from "graphql-tag"
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
    <Service.Contents service={group.bulletins.edges[0].node} />
  )
}

export default Sunday


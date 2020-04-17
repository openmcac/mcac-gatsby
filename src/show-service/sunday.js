import Loading from "../common/loading"
import React from "react"
import Service, { HeaderIcon } from "./service"
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

  const livestream = (
    <section className="pb-12 sm:pb-32 bg-black">
      <div className="max-w-2xl mx-auto">
        <HeaderIcon className="absolute ml-4 -mt-12">
          <span role="img" aria-label="Livestream icon">🎥</span>
        </HeaderIcon>
        <div className="text-center text-gray-600 pt-20">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube-nocookie.com/embed/xa2G56fGOhY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </section>
  )

  return (
    <>
      <Helmet>
        <title>Sunday | Montreal Chinese Alliance Church</title>
      </Helmet>
      <Service.Contents service={group.bulletins.edges[0].node} livestream={livestream} />
    </>
  )
}

export default Sunday


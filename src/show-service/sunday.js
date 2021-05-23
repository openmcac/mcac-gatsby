import InfiniteScroll from "react-infinite-scroller"
import Loading from "../common/loading"
import React, { useState } from "react"
import Service, { HeaderIcon } from "./service"
import Spinner from "../common/spinner"
import gql from "graphql-tag"
import styled from "styled-components"
import update from "immutability-helper"
import { FaCertificate as FooterIcon } from "react-icons/fa"
import { Helmet } from "react-helmet"
import { serviceRoute } from "../common/url-helper"
import { useApolloClient, useQuery } from "@apollo/react-hooks"

const FETCH_NEXT_SERVICE = gql`
  query sunday($after: String) {
    group(slug: "english-service") {
      id
      bulletins(first: 1, after: $after) {
        pageInfo {
          endCursor
          hasNextPage
        }
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

const Livestream = styled.section`
  background-color: #e1e1e1;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

const WidescreenAspectRatio = styled.div`
 position: relative;
 padding-top:56.25%;
`

const YouTubeFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
`

const Sunday = () => {
  const [services, setServices] = useState([])
  const [paginationInfo, setPaginationInfo] = useState(null)
  const { loading, error, data } = useQuery(FETCH_NEXT_SERVICE)
  const client = useApolloClient()

  if (loading || error) {
    return <Loading />
  }


  const { group } = data

  const handleLoadMore = async () => {
    const { data: { group: { bulletins: newBulletins } } } = await client.query({
      query: FETCH_NEXT_SERVICE,
      variables: {
        after: paginationInfo?.endCursor ?? group.bulletins.pageInfo.endCursor
      },
    })

    setServices(update(services, { $push: newBulletins.edges.map(({ node }) => node) }))
    setPaginationInfo(newBulletins.pageInfo)
  }

  const youtubeId = "HDlbwM_GcO0"

  const livestream = (
    <Livestream className="pb-12 sm:pb-32 bg-black">
      <div className="max-w-2xl mx-auto">
        <HeaderIcon className="absolute ml-4 -mt-12">
          <span role="img" aria-label="Livestream icon">🎥</span>
        </HeaderIcon>
        <div className="text-center text-gray-600 pt-20">
          <div className="mb-2 md:mb-4">
            <span className="md:text-xl py-1 px-2 text-gray-100 bg-gray-900">
              Tune in <strong>LIVE</strong> on Sunday at 9:30 am
            </span>
          </div>
          <WidescreenAspectRatio>
            <YouTubeFrame
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </YouTubeFrame>
          </WidescreenAspectRatio>
          <div className="mt-6">
            <div className="mb-2">
              <a className="py-1 px-2 text-gray-100 bg-gray-900 hover:bg-gray-800 hover:text-gray-100" href={`https://www.youtube.com/watch?v=${youtubeId}`}>Open in <strong>YouTube</strong></a>
            </div>
            <div className="mb-2">
              <a className="py-1 px-2 text-gray-100 bg-gray-900 hover:bg-gray-800 hover:text-gray-100" href="https://fisherhall.mcac.church">Join us on <strong>Zoom</strong> after the service</a>
            </div>
          </div>
        </div>
      </div>
    </Livestream>
  )

  const service = group.bulletins.edges[0].node

  return (
    <>
      <Helmet>
        <title>Sunday | Montreal Chinese Alliance Church</title>
        <link rel="canonical" href={`${process.env.REACT_APP_WEB_HOST}${serviceRoute.url({ id: service.id })}`} />
      </Helmet>
      <Service.Contents service={service} livestream={livestream} />
      <InfiniteScroll
        loadMore={handleLoadMore}
        hasMore={paginationInfo?.hasNextPage ?? group.bulletins.pageInfo.hasNextPage}
        loader={<div className="text-center text-gray-500 uppercase tracking-widest"><Spinner /></div>}>
        {services.map(service => (
          <div className="mt-24">
            <div className="text-gray-200 text-2xl mt-12 sm:mt-16 md:mt-20 mb-24 sm:mb-32 md:mb-40"><FooterIcon className="mx-auto" /></div>
            <Service.Contents service={service} />
          </div>
        ))}
      </InfiniteScroll>
    </>
  )
}

export default Sunday


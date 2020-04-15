import "moment-timezone"
import Loading from "../common/loading"
import Markdown from "react-markdown"
import Moment from "react-moment"
import React from "react"
import gql from "graphql-tag"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"

const Header = styled.section`
  background-image: url(/sanctuary.png);
  background-size: cover;
  background-position: center;

  background-color: rgba(0, 0, 0, .25);
  background-blend-mode: multiply;
`

const HeaderIcon = styled.div`
  font-size: 72px;
`

const Background = styled.div`
  background-image: url(/sanctuary.png);
  background-size: cover;
  background-position: center;

  background-color: rgba(0, 0, 0, .60);
  background-blend-mode: multiply;
`

const Announcements = styled.section`
  background-color: #000;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f7fafc' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

const FETCH_SERVICE = gql`
  query service($id: ID!) {
    service(id: $id) {
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
`

const Service = ({ id }) => {
  const { loading, error, data } = useQuery(FETCH_SERVICE, { variables: { id } })

  if (loading || error) {
    return <Loading />
  }

  const { service } = data

  return <Service.Contents service={service} />
}

Service.Contents = ({ service }) => {
  const serviceOrderRenderers = {
    listItem: ({ children }) => <li className="mb-10 text-sm md:text-xl">{children}</li>,
    strong: ({ children }) => <strong className="text-xl sm:text-2xl font-medium text-gray-900">{children}</strong>,
    // eslint-disable-next-line
    link: props => <a {...props} className="border-gray-700 text-black" />,
  }

  const announcementRenderers = {
    paragraph: ({ children }) => <p className="inline bg-white text-gray-900">{children}</p>,
    listItem: ({ children }) => <li className="ml-6">{children}</li>,
    list: ({ children }) => <ul className="list-disc text-gray-900">{children}</ul>,
    // eslint-disable-next-line
    link: props => <a {...props} className="border-gray-700 text-black" />,
  }

  return (
    <div>
      <Background>
        <Header className="max-w-6xl mx-auto">
          <div className="mx-auto text-white h-56 sm:h-64 md:h-128 xl:h-256 flex items-center">
            <div className="mx-auto">
              <div className="bg-white text-gray-900 px-2 font-semibold tracking-wide text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl sm:tracking-wider mb-3 md:mb-6 lg:mb-8">{service.name}</div>
              <div className="text-center text-sm sm:text-base md:text-lg lg:text-xl">
                <Moment
                  className="bg-white text-gray-900 px-2 py-1"
                  format="MMMM Do YYYY [at] h:mm a"
                  tz="America/Montreal">
                  {service.publishedAt}
                </Moment>
              </div>
            </div>
          </div>
        </Header>
      </Background>
      <section className="max-w-2xl mx-auto -mt-12 mb-32">
        <HeaderIcon className="ml-4">
          <span role="img" aria-label="Service Order icon">📄</span>
        </HeaderIcon>
        <div className="text-center mt-6 text-gray-600">
          <Markdown source={service.serviceOrder} renderers={serviceOrderRenderers} />
        </div>
      </section>
      <Announcements className="border-t border-gray-200 bg-black text-gray-800 pb-12">
        <div className="max-w-2xl mx-auto">
          <HeaderIcon className="absolute ml-4 -mt-12"><a className="border-0" name="announcements" href="#announcements">🗓</a></HeaderIcon>
          <h2 className="pt-16 ml-3 text-xl sm:text-3xl font-bold mb-6">
            <span className="bg-white text-gray-900 px-2 py-1">Announcements</span>
          </h2>
          <ol className="list-decimal ml-8 mr-4 sm:text-lg text-white">
            {service.announcements.map((announcement, index) => (
              <li key={index} className="mb-4 sm:mb-6 bg-white px-2 pb-1">
                <Markdown source={announcement.description} renderers={announcementRenderers} />
              </li>
            ))}
          </ol>
        </div>
      </Announcements>
    </div>
  )
}

export default Service


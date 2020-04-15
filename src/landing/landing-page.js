import Loading from "../common/loading"
import React from "react"
import Show from "../common/show"
import gql from "graphql-tag"
import styled from "styled-components"
import { FaChevronDown as ChevronDownIcon } from "react-icons/fa"
import { Link } from "@reach/router"
import { TiLocation as LocationIcon } from "react-icons/ti"
import { groupRoute } from "../common/url-helper"
import { useQuery } from "@apollo/react-hooks"

const Cover = styled.section`
  background-size: cover;
  background-position: bottom;
  background-image: url(main-1920.jpg);

  background-color: rgba(0, 0, 0, .25);
  background-blend-mode: multiply;
`

const LOAD_GROUPS = gql`
  query landingPage {
    groups {
      id
      slug
      name
      profilePictureUrl
    }
  }
`

const LandingPage = () => {
  const { data, loading, error } = useQuery(LOAD_GROUPS)
  if (loading || error) {
    return <Loading />
  }

  const { groups } = data
  return <LandingPage.Contents groups={groups} />
}

LandingPage.Contents = ({ groups }) => {
  return (
    <div>
      <Cover className="h-screen flex items-center text-white">
        <div className="flex flex-col items-center mx-auto">
          <div className="font-bold uppercase tracking-wider text-3xl sm:text-6xl mb-6">Loved, Loving.</div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 tracking-wide text-lg sm:text-xl lg:text-2xl flex items-center">
              <LocationIcon className="inline mr-2" />
              <span className="line-through">13 Finchley</span>
              &nbsp;Online only
            </div>
            <div className="md:border-l-2 md:pl-6 md:ml-6 sm:text-xl lg:text-2xl text-center">Live online Sundays at 9:30AM on <a className="font-semibold border-b border-dotted" href="http://live.mcac.church">YouTube</a></div>
          </div>
        </div>
        <ChevronDownIcon className="text-4xl text-white absolute inset-x-0 mx-auto mb-2 bottom-0 opacity-50" />
      </Cover>
      <section className="bg-gray-200 py-8 sm:py-16 px-1 text-center sm:text-lg md:text-xl">
        <div className="max-w-2xl mx-auto">
          As a congregation of the Montreal Chinese Alliance Church we believe{" "}
          <strong>because God loves us, we will love Jesus, love His people,
          and love the world, for Jesus' sake.</strong>
        </div>
      </section>
      <Show show={groups.length > 0 }>
        <section className="py-8 sm:py-16 px-1 text-center sm:text-lg md:text-xl">
          <p className="max-w-2xl mx-auto">
            Want to know more about our church? Check out some of the groups
            within our church that may interest you.
          </p>

          <ul className="container mx-auto mt-8 sm:mt-16 flex flex-wrap md:text-lg">
            {groups.map((group, index) => (
              <li key={index} className="flex flex-col mb-8 sm:mb-16 sm:w-1/2 md:w-1/3 mx-auto">
                <Link to={groupRoute.url({ slug: group.slug })} className="border-0">
                  <img
                    className="rounded-full object-cover w-48 h-48 mx-auto mb-4"
                    src={group.profilePictureUrl}
                    alt={group.name}
                  />
                  <p>{group.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Show>
    </div>
  )
}

export default LandingPage


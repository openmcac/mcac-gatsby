import React from "react"
import styled from "styled-components"
import { AiFillClockCircle as ClockIcon } from "react-icons/ai"
import { IoIosPeople as PeopleIcon } from "react-icons/io"

const Background = styled.div`
  background-image: url(${({ bannerUrl }) => bannerUrl});
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, .60);
  background-blend-mode: multiply;
`

const Cover = styled.div`
  background-image: url(${({ bannerUrl }) => bannerUrl});
  background-size: cover;
  background-position: center;
`

const Header = ({ group }) => {
  return (
    <div>
      <Background bannerUrl={group.bannerUrl}>
        <Cover
          className="h-48 md:h-56 lg:h-64 max-w-6xl mx-auto"
          bannerUrl={group.bannerUrl}
        />
      </Background>
      <div className="mx-2 mt-2 max-w-3xl xl:max-w-4xl lg:mx-auto">
        <img
          src={group.profilePictureUrl}
          className="w-32 h-32 rounded-full border-2 border-white -mt-12 ml-2"
          alt={group.name}
        />
        <div className="font-bold text-xl my-2">{group.name}</div>
        <div>{group.shortDescription}</div>
        <div className="flex flex-wrap text-gray-500 text-sm mt-6">
          <div className="flex flex-row items-center mr-2">
            <PeopleIcon className="inline text-gray-600 text-lg mr-1" /> {group.targetAudience}
          </div>
          <div className="flex flex-row items-center">
            <ClockIcon className="inline text-gray-600 mx-1" /> {group.meetDetails}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header


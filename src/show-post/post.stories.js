import "../tailwind.generated.css"
import Post from "./post"
import React from 'react';

export default { title: "Show Post/Post", component: Post }

export const defaultState = () => {
  const post = {
    id: "asdfasd",
    bannerUrl: "https://mcac.s3.amazonaws.com/posts/1b08daed-08dc-48c2-99a1-a1ad4784bb76.jpg",
    content: `The financial department announced a new option to make online
offerings through Interac® e-Transfer by adding MCAC’s registered Email
address (donations.mcac[at]gmail.com) as an e-Transfer payee via your
online banking system.

Please remember to include your

1. offering account number  
2. full official name  
3. specify the intended purpose (e.g. General or Mission fund)  
4. the congregation you belong to (e.g. English/Chinese/Mandarin)

in the message box for accounting purposes. For more details, please inquire
the finance department.`,
    groupSlug: "english-service",
    kind: "post",
    slug: "online-tithing-via-e-transfer",
    tags: [],
    title: "Online Tithing via E-Transfer",
    publishedAt: "2020-03-28T22:49:09+00:00",
    updatedAt: "2020-03-28T22:49:09+00:00",
    group: {
      about: "Welcome friends and visitors. We invite you to make MCAC your spiritual home and to worship with us every Sunday morning at 9:30am. Please let us know how we can be of help to you.↵↵The 2016 Church theme is **God is Able** from Ephesians 3:20: *Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.*↵↵How can we pray for you? Let us know by [filling out a prayer request card](http://goo.gl/forms/vVNZxMsFFO).",
      bannerUrl: "https://mcac.s3.amazonaws.com/groups/887d6625-eb28-4de6-a158-d25bf5bf147f.jpg",
      meetDetails: "Sundays at 9:30am",
      name: "English Service",
      profilePictureUrl: "https://mcac.s3.amazonaws.com/groups/5c7d76a8-d195-4907-951d-5b3fb00c438d.jpg",
      shortDescription: "Worship service for the English congregation.",
      slug: "english-service",
      targetAudience: "Members and seekers",
    }
  }

  return (
    <Post post={post} />
  )
}

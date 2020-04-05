import Header from "../groups/header"
import React from "react"
import Post from "../show-post/post"

const Profile = ({ group }) => {
  return (
    <div>
      <Header group={group} />

      <div className="container mx-auto mt-12">
        {group.posts.map(post => (
          <div key={post.id} className="mt-6">
            <Post post={post} group={group} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile


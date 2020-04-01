import React from "react"

const LandingPage = ({ groups }) => {
  return (
    <div>
      <section>
        <div>Loved, Loving.</div>
        <div>13 Finchley</div>
        <div>Live online Sundays at 9:30AM on YouTube</div>
      </section>
      <section>
        As a congregation of the Montreal Chinese Alliance Church we believe
        <strong>because God loves us, we will love Jesus, love His people,
        and love the world, for Jesus' sake.</strong>
      </section>
      <section>
        <p>
          Want to know more about our church? Check out some of the groups
          within our church that may interest you.
        </p>

        {groups.map((group, index) => (
          <ul key={index}>
            <li>
              <p>{group.name}</p>
              <img src={group.displayPicUrl} alt={`display picture for ${group.name}`} />
            </li>
          </ul>
        ))}
      </section>
    </div>
  )
}

export default LandingPage


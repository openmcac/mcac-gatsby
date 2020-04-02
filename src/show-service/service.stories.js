import "../tailwind.generated.css"
import React from 'react';
import Service from "./service"

export default { title: "Show Service/Service", component: Service }

export const defaultState = () => {
  return (
    <Service service={Fixtures.service} />
  )
}

const Fixtures = {
  service: {
    name: "Sunday Worship Service",
    order: `- **Call to Worship**
 - **Praise & Worship**
 - **Pray with our Children**
 - **[Announcements](#announcements)**
 - **Offering**
 - **Sermon**  
   [Be Still](https://www.youtube.com/watch?v=gH4ff1O2Jfw)  
   Psalm 46:10  
   Pastor Joel Uong
 -  **Doxology**
 - **Benediction**`,
    publishedAt: "2020-03-22T13:30:00+00:00",
    announcements: [
      { description: "Announcement 1 and [link](http://example.com)" },
      { description: "In order to be in compliance with the Canadian Government's rigorous preventive measures on the COVID-19, starting from March 17th, MCAC suspends all meetings that take place at our church facilities (including fellowship gatherings, prayer meetings, Sunday School classes, Lent Studies, and Sunday Worship Services and more...). All meetings will be conducted online until further notice. [Click here for the latest updates.](/english-service)" },
      {
        description: `Prayer needed:
 - for the search of the English Pastor and the needs of the English congregation
 - for the global pandemic situation
 - for the leaders of this country and our church
 - for God's mercy and his protection`
      },
    ],
  }
}

import "antd/dist/antd.css"
import "./tailwind.generated.css"
import ApolloClient from 'apollo-boost'
import GroupProfile from "./show-group/profile"
import LandingPage from "./landing/landing-page"
import MainLayout from "./layouts/main"
import Post from "./show-post/post"
import React from "react"
import Service from "./show-service/service"
import Sunday from "./show-service/sunday"
import { ApolloProvider } from "@apollo/react-hooks"
import { Router } from "@reach/router"
import { CloudinaryContext } from "cloudinary-react"

function App() {
  const client = new ApolloClient({ uri: process.env.REACT_APP_GRAPHQL_URL })
  const alert = (
    <div className="w-screen py-2 lg:py-4 text-sm bg-yellow-300 text-yellow-700 border-b border-yellow-900">
      <div className="container px-2 text-center mx-auto">
        Service is now open to the public. Seating is limited so <a className="hover:text-yellow-900 hover:border-yellow-900 border-yellow-600" href="https://reopening.mcac.church">register now to reserve a spot.</a>
        {" "}Our services can also be <a className="hover:text-yellow-900 hover:border-yellow-900 border-yellow-600" href="http://live.mcac.church">streamed on Sundays</a> at 9:30am.
      </div>
    </div>
  )

  return (
    <ApolloProvider client={client}>
      <CloudinaryContext cloudName={process.env.REACT_APP_CLOUDINARY_ID}>
        <MainLayout alert={alert}>
          <Router>
            <LandingPage path="/" />
            <GroupProfile path="/:slug" />
            <Post path="/:group/:year/:month/:day/:id/:slug" />
            <Service path="/service/:id" />
            <Sunday path="/sunday" />
          </Router>
        </MainLayout>
      </CloudinaryContext>
    </ApolloProvider>
  )
}

export default App;

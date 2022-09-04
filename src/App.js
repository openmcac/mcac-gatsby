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

  return (
    <ApolloProvider client={client}>
      <CloudinaryContext cloudName={process.env.REACT_APP_CLOUDINARY_ID}>
        <MainLayout>
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

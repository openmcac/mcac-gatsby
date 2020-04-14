import "antd/dist/antd.css"
import "./tailwind.generated.css"
import ApolloClient from 'apollo-boost'
import GroupProfile from "./show-group/profile"
import LandingPage from "./landing/landing-page"
import MainLayout from "./layouts/main"
import Post from "./show-post/post"
import React from "react"
import Service from "./show-service/service"
import { ApolloProvider } from "@apollo/react-hooks"
import { Router } from "@reach/router"

function App() {
  const client = new ApolloClient({ uri: process.env.REACT_APP_GRAPHQL_URL })

  return (
    <ApolloProvider client={client}>
      <MainLayout>
        <Router>
          <LandingPage path="/" />
          <GroupProfile path="/:slug" />
          <Post path="/:group/:year/:month/:day/:id/:slug" />
          <Service path="/:group/bulletin/:id" />
        </Router>
      </MainLayout>
    </ApolloProvider>
  )
}

export default App;

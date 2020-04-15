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

function App() {
  const client = new ApolloClient({ uri: process.env.REACT_APP_GRAPHQL_URL })
  const alert = (
    <div className="w-screen py-2 lg:py-4 text-sm bg-red-800 text-white border-b border-red-900">
      <div className="container px-2 text-center mx-auto">
        In support of{" "}
        <a href="https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/">
          Québec's COVID-19 directives
        </a>, our church building will be closed until further notice.{" "}
        Our services can be <a href="http://live.mcac.church">streamed on Sundays</a> at 9:30am!
      </div>
    </div>
  )

  return (
    <ApolloProvider client={client}>
      <MainLayout alert={alert}>
        <Router>
          <LandingPage path="/" />
          <GroupProfile path="/:slug" />
          <Post path="/:group/:year/:month/:day/:id/:slug" />
          <Service path="/:group/bulletin/:id" />
          <Sunday path="/sunday" />
        </Router>
      </MainLayout>
    </ApolloProvider>
  )
}

export default App;

import "./tailwind.generated.css"
import ApolloClient from 'apollo-boost'
import GroupProfile from "./show-group/profile"
import LandingPage from "./landing/landing-page"
import Post from "./show-post/post"
import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { Router } from "@reach/router"

function App() {
  const client = new ApolloClient({ uri: process.env.REACT_APP_GRAPHQL_URL })

  return (
    <ApolloProvider client={client}>
      <div>
        <Router>
          <LandingPage path="/" />
          <GroupProfile path="/:slug" />
          <Post path="/:group/:year/:month/:day/:id/:slug" />
        </Router>
      </div>
    </ApolloProvider>
  )
}

export default App;

import React from "react";
import { ApolloProvider } from "@apollo/react-hooks"
import MainLayout from "../layouts/main"
import withApollo from "../hooks/withApollo"

import "antd/dist/antd.css"
import "../styles.css"

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps, apollo }) {
  const alert = (
    <div className="w-screen py-2 lg:py-4 text-sm bg-red-800 text-white border-b border-red-900">
      <div className="container px-2 text-center mx-auto">
        In support of{" "}
        <a className="hover:text-red-200 hover:border-red-200" href="https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/">
          Québec's COVID-19 directives
        </a>, our church building will be closed until further notice.{" "}
        Our services can be <a className="hover:text-red-200 hover:border-red-200" href="http://live.mcac.church">streamed on Sundays</a> at 9:30am!
      </div>
    </div>
  )

  return (
    <ApolloProvider client={apollo}>
      <MainLayout alert={alert}>
      </MainLayout>
    </ApolloProvider>
  )
}

export default withApollo(MyApp)

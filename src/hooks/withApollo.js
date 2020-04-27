import withApollo from "next-with-apollo"
import ApolloClient, { InMemoryCache } from "apollo-boost"
import "node-fetch";
 
export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: process.env.REACT_APP_GRAPHQL_URL,
      cache: new InMemoryCache().restore(initialState || {})
    })
)
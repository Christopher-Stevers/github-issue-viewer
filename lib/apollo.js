import { ApolloClient, InMemoryCache } from "@apollo/client";
const apolloClient = new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache: new InMemoryCache(),
    headers: {
       authorization: `Bearer ${"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"}`
    }
})

export default apolloClient;
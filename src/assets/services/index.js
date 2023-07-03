import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-sa-east-1.hygraph.com/v2/cljk4q07w104a01ula20b2egd/master",
    cache: new InMemoryCache()
});

export default client;
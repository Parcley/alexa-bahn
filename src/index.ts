import { ApolloClient, ApolloClientOptions, ApolloQueryResult } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'isomorphic-fetch'

import {stationsByNameQuery, stationsByNameQueryVariables} from './queries'

const client = new ApolloClient(
    {
        link: new HttpLink({
            uri: "https://api.deutschebahn.com/1bahnql/v1/graphql",
            headers: {
                authorization: "bearer: ###API_KEY_HERE###"
            }
        }),
        cache: new InMemoryCache()
    }
);

function getStations(stationname: string):Promise<ApolloQueryResult<stationsByNameQuery>>{
    return client.query({
        query: require("../graphql/stationsByName.graphql"),
        variables: {stationname}
    });
}


getStations("Vilsbiburg").then( (result: any) => {console.log(result)});

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { typeDefs, resolvers } from './resolvers';
import { END_POINT } from '../config';

export default function createApolloClient(initialState, ctx) {
  const cache = new InMemoryCache().restore(initialState);

  const client = new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri: `${END_POINT}graphql`,
      credentials: 'same-origin',
    }),
    cache,
    typeDefs,
    resolvers,
  });

  cache.writeData({
    data: {
      cartItems: [],
    },
  });

  return client;
}

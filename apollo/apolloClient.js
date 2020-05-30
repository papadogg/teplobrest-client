import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { typeDefs, resolvers } from './resolvers';

export default function createApolloClient(initialState, ctx) {
  const cache = new InMemoryCache().restore(initialState);

  const client = new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri: 'http://localhost:4000/api',
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

import gql from 'graphql-tag';
import { GET_CART_ITEMS } from '../query';

export const typeDefs = gql`
  type CartItem {
    product: Product!
    count: Int!
  }

  extend type Query {
    cartItems: [CartItem!]!
  }

  extend type Mutation {
    addToCart(product: Product!): [CartItem!]!
    removeFromCart(id: ID!): Boolean
    increase(id: ID!): Boolean
    decrease(id: ID!): Boolean
  }
`;

export const resolvers = {
  Mutation: {
    addToCart: (_, { product }, { cache }) => {
      const queryResult = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      if (queryResult) {
        let { cartItems } = queryResult;

        const productInCart = cartItems.find(
          (item) => item.product.id === product.id
        );

        if (productInCart) {
          cartItems = cartItems.map((item) => {
            if (item.product.id === product.id) {
              return {
                __typename: 'CartItem',
                product: item.product,
                count: item.count + 1,
              };
            }
            return item;
          });
        } else {
          cartItems = [
            ...cartItems,
            {
              __typename: 'CartItem',
              product,
              count: 1,
            },
          ];
        }

        const data = {
          cartItems,
        };

        cache.writeQuery({ query: GET_CART_ITEMS, data });
        return data.cartItems;
      }
      return [];
    },
    removeFromCart: (_, { id }, { cache }) => {
      const queryResult = cache.readQuery({
        query: GET_CART_ITEMS,
      });
      if (queryResult) {
        const { cartItems } = queryResult;
        const data = {
          cartItems: cartItems.filter((item) => item.product.id !== id),
        };

        cache.writeQuery({ query: GET_CART_ITEMS, data });
        return true;
      }
      return false;
    },
    increase: (_, { id }, { cache }) => {
      const queryResult = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      if (queryResult) {
        let { cartItems } = queryResult;

        cartItems = cartItems.map((item) => {
          if (item.product.id === id) {
            return {
              __typename: 'CartItem',
              product: item.product,
              count: item.count + 1,
            };
          }
          return item;
        });

        const data = {
          cartItems,
        };

        cache.writeQuery({ query: GET_CART_ITEMS, data });
        return true;
      }
      return false;
    },
    decrease: (_, { id }, { cache }) => {
      const queryResult = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      if (queryResult) {
        let { cartItems } = queryResult;

        cartItems = cartItems.map((item) => {
          if (item.product.id === id) {
            return {
              __typename: 'CartItem',
              product: item.product,
              count: item.count === 1 ? 1 : item.count - 1,
            };
          }
          return item;
        });

        const data = {
          cartItems,
        };

        cache.writeQuery({ query: GET_CART_ITEMS, data });
        return true;
      }
      return false;
    },
  },
};

import gql from 'graphql-tag';

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client {
      product {
        id
        name
        price
        promoPrice
        images {
          small
        }
      }
      count
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation addToCart($product: Product!) {
    addToCart(product: $product) @client
  }
`;

export const REMOVE_FROM_CART = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) @client
  }
`;

export const INCREASE = gql`
  mutation increase($id: ID!) {
    increase(id: $id) @client
  }
`;

export const DECREASE = gql`
  mutation decrease($id: ID!) {
    decrease(id: $id) @client
  }
`;

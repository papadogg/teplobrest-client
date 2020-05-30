import gql from 'graphql-tag';

export const CREATE_ORDER = gql`
  mutation createOrder($input: OrderInput!) {
    createOrder(input: $input) {
      id
    }
  }
`;

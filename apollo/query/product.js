import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
  query getProducts($from: Int, $to: Int, $slug: String, $brand: String) {
    getProducts(from: $from, to: $to, slug: $slug, brand: $brand) {
      products {
        id
        name
        categories {
          id
          name
          key
        }
        slug
        brand {
          id
          name
          key
        }
        priceRub
        promoPriceRub
        description
        availability
        images {
          medium
          small
        }
        attributes {
          attribute {
            id
            key
            name
            unit
          }
          value
        }
      }
      total
    }
  }
`;

export const GET_PRODUCT = gql`
  query getProduct($id: ID, $slug: String) {
    getProduct(id: $id, slug: $slug) {
      id
      name
      categories {
        id
        name
        key
      }
      slug
      brand {
        id
        name
        key
      }
      priceRub
      promoPriceRub
      description
      availability
      images {
        medium
        small
      }
      attributes {
        attribute {
          id
          key
          name
          unit
        }
        value
      }
      relatedProducts {
        name
        slug
        attribute {
          name
          unit
          value
        }
      }
    }
  }
`;

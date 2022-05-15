import { gql } from 'graphql-tag';

export const getItemsQuery = gql`
  query getItems {
    items {
      id
      name
      address
      description
      brand
      make
      model
      size
      genderUsage
      type
      identifier
      ownerEmail
      dod
      dop
      imageUrl
    }
  }
`;

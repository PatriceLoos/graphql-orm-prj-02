import { gql } from 'graphql-tag';

export const getUsersQuery = gql`
  query getUsers {
    users {
      id
      name
      email
      dob
      address
      description
      imageUrl
    }
  }
`;

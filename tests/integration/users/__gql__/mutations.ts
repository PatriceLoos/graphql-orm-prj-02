import gql from 'graphql-tag';

export const createUserMutation = gql`
  mutation create(
    $name: String!
    $email: String
    $dob: String!
    $address: String!
    $description: String!
    $imageUrl: String!
  ) {
    createUser(
      input: {
        name: $name
        email: $email
        dob: $dob
        address: $address
        description: $description
        imageUrl: $imageUrl
      }
    ) {
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

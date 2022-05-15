import gql from 'graphql-tag';

export const createItemMutation = gql`
  mutation create(
    $name: String!
    $address: String!
    $description: String!
    $brand: String!
    $make: String!
    $model: String!
    $size: String!
    $genderUsage: String!
    $type: String!
    $identifier: String!
    $ownerEmail: String!
    $dod: String!
    $dop: String!
    $imageUrl: String!
  ) {
    createItem(
      input: {
        name: $name
        address: $address
        description: $description
        brand: $brand
        make: $make
        model: $model
        size: $size
        genderUsage: $genderUsage
        type: $type
        identifier: $identifier
        ownerEmail: $ownerEmail
        dod: $dod
        dop: $dop
        imageUrl: $imageUrl
      }
    ) {
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

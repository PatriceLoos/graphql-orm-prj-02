import { Connection } from 'typeorm';
import { createTestClient } from 'apollo-server-testing';
import { createUserMutation } from './__gql__/mutations';
import {
  createTestConnection,
  createTestServer,
  clearTestDb,
} from '../../utils';

let testConnection: Connection;

beforeAll(async () => {
  testConnection = await createTestConnection();
});

beforeEach(async () => {
  await clearTestDb(testConnection);
});

afterAll(async () => {
  await testConnection.close();
});

describe('Create Users', () => {
  it('should register a new user in the database', async () => {
    const userInput = {
      dob: "2021-05-07",
      name: "John Walker",
      id: 1,
      email: "Johnwalker@email.com",
      address: "934 38 st w, Wolf city, DF, 09080",
      description: "user",
      imageUrl: "http://image.com",
    };

    const apolloServer = await createTestServer();
    const { query } = createTestClient(apolloServer);

    const res = await query({
      query: createUserMutation,
      variables: userInput,
    });
    expect(res).toMatchSnapshot('New user');
  });
});

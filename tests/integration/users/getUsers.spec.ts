import { Connection } from 'typeorm';
import { createTestClient } from 'apollo-server-testing';
import { getUsersQuery } from './__gql__/queries';
import {
  createTestConnection,
  createTestServer,
  clearTestDb,
} from '../../utils';
import Users from '../../../src/entities/Users';

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

describe('Get Users', () => {
  it('should return empty array if no users are registered', async () => {
    const apolloServer = await createTestServer();
    const { query } = createTestClient(apolloServer);

    const res = await query({
      query: getUsersQuery,
    });
    expect(res).toMatchSnapshot('Empty users list');
  });

  it('should return array with one registered user', async () => {
    const user = {
      dob: "2021-05-07",
      name: "John Walker",
      id: 1,
      email: "Johnwalker@email.com",
      address: "934 38 st w, Wolf city, DF, 09080",
      description: "user",
      imageUrl: "http://image.com",
    };

    await testConnection.getRepository(Users).save(user);

    const apolloServer = await createTestServer();
    const { query } = createTestClient(apolloServer);

    const res = await query({
      query: getUsersQuery,
    });
    expect(res).toMatchSnapshot('Filled users list');
  });
});

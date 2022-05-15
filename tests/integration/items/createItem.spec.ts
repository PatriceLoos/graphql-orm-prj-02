import { Connection } from 'typeorm';
import { createTestClient } from 'apollo-server-testing';
import { createItemMutation } from './__gql__/mutations';
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

describe('Create Items', () => {
  it('should register a new item in the database', async () => {
    const itemInput = {
      name: "cravache",
      address: "2020 ouille st, St-Louis, MS, 020102",
      description: "whip",
      brand: "Fischer",
      make: "Aerospace",
      model: "brown suede",
      size: "unisize",
      genderUsage: "n/a",
      type: "",
      identifier: "8787878",
      ownerEmail: "d@zone.com",
      dod: "08/29/2010",
      dop: "12/12/2001",
      imageUrl: "www.url.gov",
    };

    const apolloServer = await createTestServer();
    const { query } = createTestClient(apolloServer);

    const res = await query({
      query: createItemMutation,
      variables: itemInput,
    });
    expect(res).toMatchSnapshot('New item');
  });
});

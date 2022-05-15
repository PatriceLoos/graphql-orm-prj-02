import { Connection } from 'typeorm';
import { createTestClient } from 'apollo-server-testing';
import { getItemsQuery } from './__gql__/queries';
import {
  createTestConnection,
  createTestServer,
  clearTestDb,
} from '../../utils';
import Items from '../../../src/entities/Items';

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

describe('Get Items', () => {
  it('should return empty array if no items are registered', async () => {
    const apolloServer = await createTestServer();
    const { query } = createTestClient(apolloServer);

    const res = await query({
      query: getItemsQuery,
    });
    expect(res).toMatchSnapshot('Empty items list');
  });

  it('should return array with one registered item', async () => {
    const item = {
      id: 1,
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

    await testConnection.getRepository(Items).save(item);

    const apolloServer = await createTestServer();
    const { query } = createTestClient(apolloServer);

    const res = await query({
      query: getItemsQuery,
    });
    expect(res).toMatchSnapshot('Filled items list');
  });
});

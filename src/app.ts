import config from './config';
import apolloServer from './graphql';
import createDbConnection from './database';
import { ConnectionOptions } from 'typeorm';

const { port, database } = config;

export const graphqlHandler = async (event: unknown, context: any, callback: any) => {
  const apolloHandler = await apolloServer().then(a=>a.createHandler({
    expressGetMiddlewareOptions: {
      cors: {
        origin: '*',
        credentials: true,
      }
    },
  }))
  await createDbConnection(database as ConnectionOptions);
  return await apolloHandler(event, context, callback)
}
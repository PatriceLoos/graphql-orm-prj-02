import 'reflect-metadata';
import path from 'path';
// import { ApolloServer } from 'apollo-server-express';
import { ApolloServer } from 'apollo-server-lambda';

import { BuildSchemaOptions, buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import InfoResolver from './resolvers/Info/queries/info'
import GetUserResolver from './resolvers/Users/queries/users';
import CreateUserResolver from './resolvers/Users/mutations/users';
import GetItemResolver from './resolvers/Items/queries/items';
import CreateItemResolver from './resolvers/Items/mutations/items';


const apolloServer = async () => {
  const resolversPath = path.join(__dirname, './resolvers/**/index.{ts,js}');
  // const resolversPath = '/home/patrice/git/graphql-orm-prj-02/src/graphql/resolvers/**/index.{ts,js}';
  console.log('resolversPath',resolversPath)
  const apolloSchemaOptions: BuildSchemaOptions = {
    // resolvers: [InfoResolver, GetUserResolver, CreateUserResolver, GetItemResolver, CreateItemResolver],
    resolvers:[resolversPath],
    validate: false,
    container: Container,
    emitSchemaFile: false,
  };

//   (global as any).schema = (global as any).schema || await buildSchema(/*... */);
// const schema = (global as any).schema;

  if (!(global as any).schema){
    (global as any).schema =  await buildSchema(apolloSchemaOptions);
  }
  const schema = (global as any).schema;

  return new ApolloServer({
    schema,
    // playground: true,
    // introspection: true,
  });
};

export default apolloServer;

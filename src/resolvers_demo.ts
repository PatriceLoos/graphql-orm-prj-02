import { environment } from './environment';

export const resolvers = {
  Query: {
    testMessage: () => environment.DEMO_MESSAGE,
  },
};
import Items from './Items';
import Pets from './Pets';
import Users from './Users';

const entities = {
  Pets,Users,Items
};

export const dbEntities = Object.values(entities);
export default entities;

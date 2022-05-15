import { EntityRepository, Repository } from 'typeorm';
import Items from '.';
import CreateItemParams from '../../graphql/resolvers/Items/types/inputs/CreateItem';

@EntityRepository(Items)
export default class ItemsRepository extends Repository<Items> {
  async getItems() {
    return this.find();
  }

  async createItem(params: CreateItemParams):Promise<any> {
    return this.save(params).catch((err)=>{
      console.log(`Error creating item ${
        Object.keys(params)}:${
          Object.values(params)}, with error ${err}`)
    });
  }

  async updateItem(id:string,params: CreateItemParams):Promise<any> {
    return this.update(id,params).catch((err)=>{
      console.log(`Error updating item ${
        Object.keys(params)}:${
          Object.values(params)}, with error ${err}`)
    });
  }

  async deleteItem(param: {}):Promise<any> {
    return this.delete(param).catch((err)=>{
      console.log(`Error deleting item${
        Object.keys(param)}:${
          Object.values(param)}, with error ${err}`)
    });
  }

}

import ItemsRepository from '../../../../entities/Items/ItemsRepository';
import { Resolver, Mutation, Arg, ID } from 'type-graphql';
import { InjectRepository } from 'typeorm-typedi-extensions';
import CreateItemInput from '../types/inputs/CreateItem';
import Item from '../types/objects/Items'

@Resolver()
export default class CreateItemsResolver {
  @InjectRepository(ItemsRepository)
  private itemsRepository!: ItemsRepository;

  @Mutation(() => Item, { description: 'Create a new item in the database' })
  async createItem(
    @Arg('input', () => CreateItemInput)
    input: CreateItemInput
  ): Promise<Item> {
    console.log(">> Create item resolver",input)
    return await this.itemsRepository.createItem(input);
  }
  @Mutation(() => Item, { description: 'Update existing item in the database' })
  async updateitem(
    @Arg('id', () => ID ) id:string,
    @Arg('input', () => CreateItemInput)
    input: CreateItemInput,
  ): Promise<Item> {
    console.log(`>> Update item ${id} resolver with ${Object.keys(input)}`)
    return await this.itemsRepository.updateItem(id,input);
  }

  @Mutation(() => Item, { description: 'delete item database' })
  async deleteitem(
    @Arg('id', () => ID ) id:string,
  ): Promise<any> {
    console.log(`>> Delete item ${id}.`)
    return await this.itemsRepository.delete(id).then((ret: { raw: any; }) =>{
      ret.raw
    });
  }
}

import ItemsRepository from '../../../../entities/Items/ItemsRepository';
import { Resolver, Query } from 'type-graphql';
import { InjectRepository } from 'typeorm-typedi-extensions';
import Items from '../types/objects/Items';


@Resolver()
export default class GetItemsResolver {
  @InjectRepository(ItemsRepository)
  private itemsRepository!: ItemsRepository;

  @Query(() => [Items], { description: 'List of items' })
  async items(): Promise<Items[]> {
    return this.itemsRepository.getItems();
  }
}

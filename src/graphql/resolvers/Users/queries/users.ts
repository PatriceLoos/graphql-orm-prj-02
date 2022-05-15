import { Resolver, Query } from 'type-graphql';
import { InjectRepository } from 'typeorm-typedi-extensions';
import Users from '../types/objects/Users';
import UserRepository from '../../../../entities/Users/UserRepository';

@Resolver()
export default class GetUserResolver {
  @InjectRepository(UserRepository)
  private UserRepository!: UserRepository;

  @Query(() => [Users], { description: 'List of Users' })
  async users(): Promise<Users[]> {
    return this.UserRepository.getUser();
  }
}

import { Resolver, Mutation, Arg, ID } from 'type-graphql';
import { InjectRepository } from 'typeorm-typedi-extensions';
import User from '../types/objects/Users';
import UserRepository from '../../../../entities/Users/UserRepository';
import CreateUserInput from '../types/inputs/CreateUser';

@Resolver()
export default class CreateUserResolver {
  @InjectRepository(UserRepository)
  private UserRepository!: UserRepository;

  @Mutation(() => User, { description: 'Create a new User in the database' })
  async createUser(
    @Arg('input', () => CreateUserInput)
    input: CreateUserInput
  ): Promise<User> {
    console.log(">> Create User resolver",input)
    return await this.UserRepository.createUser(input);
  }
  @Mutation(() => User, { description: 'Update existing User in the database' })
  async updateUser(
    @Arg('id', () => ID ) id:string,
    @Arg('input', () => CreateUserInput)
    input: CreateUserInput,
  ): Promise<User> {
    console.log(`>> Update User ${id} resolver with ${Object.keys(input)}`)
    return await this.UserRepository.updateUser(id,input);
  }

  @Mutation(() => User, { description: 'delete user database' })
  async deleteUser(
    @Arg('id', () => ID ) id:string,
  ): Promise<any> {
    console.log(`>> Delete User ${id}.`)
    return await this.UserRepository.delete(id).then(ret =>{
      ret.raw
    });
  }
}

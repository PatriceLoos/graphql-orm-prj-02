import { EntityRepository, Repository } from 'typeorm';
import Users from '.';
import CreateUserParams from '../../graphql/resolvers/Users/types/inputs/CreateUser';

@EntityRepository(Users)
export default class UserRepository extends Repository<Users> {
  async getUser() {
    return this.find();
  }

  async createUser(params: CreateUserParams):Promise<any> {
    return this.save(params).catch((err)=>{
      console.log(`Error creating user ${
        Object.keys(params)}:${
          Object.values(params)}, with error ${err}`)
    });
  }

  async updateUser(id:string,params: CreateUserParams):Promise<any> {
    return this.update(id,params).catch((err)=>{
      console.log(`Error updating user ${
        Object.keys(params)}:${
          Object.values(params)}, with error ${err}`)
    });
  }

  async deleteUser(param: {}):Promise<any> {
    return this.delete(param).catch((err)=>{
      console.log(`Error deleting user${
        Object.keys(param)}:${
          Object.values(param)}, with error ${err}`)
    });
  }

}

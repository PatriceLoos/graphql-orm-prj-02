import { EntityRepository, Repository } from 'typeorm';
import Pets from '.';
import CreatePetParams from '../../graphql/resolvers/Pets/types/inputs/CreatePet';

@EntityRepository(Pets)
export default class PetsRepository extends Repository<Pets> {
  async getPets() {
    return this.find();
  }

  async createPet(params: CreatePetParams):Promise<any> {
    return this.save(params).catch((err)=>{
      console.log(`Error creating pet ${
        Object.keys(params)}:${
          Object.values(params)}, with error ${err}`)
    });
  }
}

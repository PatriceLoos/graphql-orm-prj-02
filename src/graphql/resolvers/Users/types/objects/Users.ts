import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export default class Users {
  @Field(() => Int)
  id!: number;

  @Field()
  name!: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  dob?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  imageUrl?: string;
}

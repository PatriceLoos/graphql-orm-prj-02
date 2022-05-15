import { Field, InputType } from 'type-graphql';

@InputType({ description: 'Create new user input' })
export default class CreateUserInput {
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

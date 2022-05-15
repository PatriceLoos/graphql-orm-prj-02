import { Field, InputType } from 'type-graphql';

@InputType({ description: 'Create new item input' })
export default class CreateItemInput {
  @Field()
  name!: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  description?: string;

   @Field({ nullable: true })
  brand?: string;

   @Field({ nullable: true })
  make?: string;

   @Field({ nullable: true })
  model?: string;

   @Field({ nullable: true })
  size?: string;

   @Field({ nullable: true })
  genderUsage?: string;

   @Field({ nullable: true })
  type?: string;

   @Field({ nullable: true })
  identifier?: string;

  @Field({ nullable: true })
  ownerEmail?: string;

  @Field({ nullable: true })
  dod?: string;

  @Field({ nullable: true })
  dop?: string;
  
  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  imageUrl?: string;
}

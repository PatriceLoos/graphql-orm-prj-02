import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'items' })
export default class Items {

  @PrimaryGeneratedColumn()
  id!: number;

   @Column({ type: 'text', nullable: true })
  name?: string;

  @Column({ type: 'text', nullable: true })
  address?: string;

   @Column({ type: 'text', nullable: true })
  description?: string;  

   @Column({ type: 'text', nullable: true })
  brand?: string;

   @Column({ type: 'text', nullable: true })
  make?: string;

   @Column({ type: 'text', nullable: true })
  model?: string;

   @Column({ type: 'text', nullable: true })
  size?: string;

   @Column({ type: 'text', nullable: true })
  genderUsage?: string;

   @Column({ type: 'text', nullable: true })
  type?: string;

   @Column({ type: 'text', nullable: true })
  identifier?: string;

  @Column({ type: 'text', nullable: true })
  ownerEmail?: string;

  @Column({ type: 'date', name: 'stolen_date' })
  dod?: string;

  @Column({ type: 'date', name: 'production_date' , nullable: true })
  dop?: string;
  
  @CreateDateColumn({
    type: 'timestamptz',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt!: Date;

  @CreateDateColumn({
    type: 'timestamptz',
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt!: Date;

   @Column({ type: 'text', nullable: true })
  imageUrl?: string;

}

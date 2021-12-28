import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from './book';

@Entity('Author')
@ObjectType()
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ length: 50 })
  @Field(() => String)
  name: string;

  @OneToOne(() => Book, ({ author }) => author)
  @JoinColumn()
  book: Book;
}

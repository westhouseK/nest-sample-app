import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from './book';

@Entity()
@ObjectType()
export class BookDetail extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ type: 'text' })
  @Field(() => String)
  detail: string;

  @ManyToOne(() => Book, (book) => book.BookDetail, {
    lazy: true,
  })
  book: Book;
}

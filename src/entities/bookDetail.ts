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
  @Field((type) => ID)
  id: number;

  @Column()
  @Field((type) => ID)
  bookId: number;

  @Column({ type: 'text' })
  @Field((type) => String)
  detail: string;

  @ManyToOne((type) => Book, (book) => book.BookDetail, {
    lazy: true,
  })
  book: Book;
}

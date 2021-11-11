import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { BookDetail } from './bookDetail';

@Entity()
@ObjectType()
export class Book {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column({ length: '50' })
  @Field({ description: 'aaa' })
  title: string;

  @Column()
  @Field((type) => String)
  author: string;

  @Column({ type: 'int', unsigned: true })
  @Field((type) => Int)
  price: number;

  @OneToMany((type) => BookDetail, (bookDetail) => bookDetail.book, {
    lazy: true,
  })
  @Field((type) => [BookDetail])
  BookDetail: BookDetail[];

  @CreateDateColumn()
  @Field()
  createdAt: Date;
}

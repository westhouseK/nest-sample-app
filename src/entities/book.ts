import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { Author } from './author';
import { BookDetail } from './bookDetail';

@Entity()
@ObjectType()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ length: '50' })
  @Field({ description: 'aaa' })
  title: string;

  @Column({ type: 'int', unsigned: true })
  @Field(() => Int)
  price: number;

  @OneToOne(() => Author, ({ book }) => book)
  @JoinColumn()
  @Field(() => Author)
  author: Author;

  @OneToMany(() => BookDetail, (bookDetail) => bookDetail.book, {
    lazy: true,
  })
  @Field(() => [BookDetail])
  BookDetail: BookDetail[];

  @CreateDateColumn()
  @Field()
  createdAt: Date;
}

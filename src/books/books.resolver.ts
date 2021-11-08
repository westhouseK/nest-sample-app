import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from '../entities/book';
import { BooksService } from './books.service';
import { NewBookInput } from '../dto/newBook.input';
import { bookGuard } from 'src/guard/book.guard';

@Resolver((of) => Book)
@UseGuards(bookGuard)
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @Query(() => [Book])
  async getBooks(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Query(() => Book)
  async getBook(@Args({ name: 'id', type: () => Int }) id: number) {
    const book = await this.booksService.findOneById(id);
    console.log(book);
    if (!book) {
      throw new NotFoundException(id);
    }
    return book;
  }

  // クエリビルダのテスト用
  @Query(() => Book)
  async getBookByQuery(@Args({ name: 'id', type: () => Int }) id: number) {
    return await this.booksService.findByQuery(id);
  }

  // 1:nを実現するためには、resolverを書かないといけない？
  // async BookDetail()

  @Mutation((returns) => Book)
  addBook(@Args('newBook') newBook: NewBookInput): Promise<Book> {
    return this.booksService.create(newBook);
  }

  @Mutation((returns) => Boolean)
  async removeBook(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.booksService.remove(id);
  }
}

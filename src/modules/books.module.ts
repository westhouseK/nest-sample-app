import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookDetail } from '../entities/bookDetail';
import { Book } from '../entities/book';
import { BookDetailResolver } from '../resolvers/bookDetail.resolver';
import { BookDetailService } from '../services/bookDetail.service';
import { BooksResolver } from '../resolvers/books.resolver';
import { BooksService } from '../services/books.service';
import { Author } from '../entities/author';

@Module({
  imports: [TypeOrmModule.forFeature([Book, BookDetail, Author])],
  providers: [
    BooksResolver,
    BooksService,
    BookDetailService,
    BookDetailResolver,
  ],
  exports: [BooksModule, TypeOrmModule],
})
export class BooksModule {}

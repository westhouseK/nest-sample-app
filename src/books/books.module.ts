import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookDetail } from 'src/entities/bookDetail';
import { Book } from '../entities/book';
import { BookDetailResolver } from './bookDetail.resolver';
import { BookDetailService } from './bookDetail.service';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book, BookDetail])],
  providers: [
    BooksResolver,
    BooksService,
    BookDetailService,
    BookDetailResolver,
  ],
})
export class BooksModule {}

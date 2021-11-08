import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookDetail } from 'src/entities/bookDetail';

@Injectable()
export class BookDetailService {
  constructor(
    @InjectRepository(BookDetail)
    private bookDetailRepostiory: Repository<BookDetail>,
  ) {}

  findAll(): Promise<BookDetail[]> {
    return this.bookDetailRepostiory.find();
  }
}

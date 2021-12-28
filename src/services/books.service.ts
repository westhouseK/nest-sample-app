import { Injectable } from '@nestjs/common';
import { Book } from '../entities/book';
import { NewBookInput } from '../dto/newBook.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepostiory: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.booksRepostiory.find();
  }

  findOneById(id: number): Promise<Book> {
    return this.booksRepostiory.findOne({
      relations: ['bookDetail'],
      where: { id },
    });
  }

  findByQuery(id: number): Promise<Book> {
    const table = this.booksRepostiory.metadata.propertiesMap;
    const a = this.booksRepostiory.metadata.createPropertiesMap();
    console.log(a.id);
    return this.booksRepostiory
      .createQueryBuilder()
      .where(`${table.id} = :${table.id}`, { id })
      .getOne();
  }

  // async create(data: NewBookInput): Promise<Book> {
  //   const book = this.booksRepostiory.create(data);
  //   await this.booksRepostiory.save(book);
  //   return book;
  // }

  async remove(id: number): Promise<boolean> {
    const result = await this.booksRepostiory.delete(id);
    return result.affected > 0;
  }
}

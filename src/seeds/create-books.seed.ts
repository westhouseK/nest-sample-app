import { BookDetail } from '../entities/bookDetail';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Book } from '../entities/book';

export default class CreateBooks implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    console.log('createBook');
    await factory(Book)().createMany(3);
    await factory(BookDetail)().createMany(1);
  }
}

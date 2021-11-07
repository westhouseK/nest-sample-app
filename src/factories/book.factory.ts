import { define } from 'typeorm-seeding';
import { Book } from '../entities/book';
import Faker from 'faker';

define(Book, (faker: typeof Faker) => {
  const book = new Book();
  book.title = faker.name.title();
  book.author = faker.name.firstName();
  book.price = faker.random.number(1000);
  return book;
});

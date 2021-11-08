import { define } from 'typeorm-seeding';
import { Book } from '../entities/book';
import Faker from 'faker';
import { BookDetail } from '../entities/bookDetail';

define(Book, (faker: typeof Faker) => {
  const book = new Book();
  book.title = faker.name.title();
  book.author = faker.name.firstName();
  book.price = faker.random.number(1000);
  return book;
});

define(BookDetail, (faker: typeof Faker) => {
  const bookDetail = new BookDetail();
  bookDetail.bookId = 1;
  bookDetail.detail = faker.lorem.words(100);
  return bookDetail;
});

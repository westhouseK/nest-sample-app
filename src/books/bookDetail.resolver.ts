import { Query, Resolver } from '@nestjs/graphql';
import { BookDetail } from 'src/entities/bookDetail';
import { BookDetailService } from './bookDetail.service';

@Resolver(() => BookDetail)
export class BookDetailResolver {
  constructor(private bookDetailService: BookDetailService) {}

  @Query(() => [BookDetail])
  async BookDetail(): Promise<BookDetail[]> {
    return this.bookDetailService.findAll();
  }
}

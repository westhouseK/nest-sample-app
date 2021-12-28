import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './modules/books.module';
import { Book } from './entities/book';
import { BookDetail } from './entities/bookDetail';
import { Author } from './entities/author';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    // TODO: ormconfigにまとめたい
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'db',
    //   port: 5432,
    //   username: 'admin',
    //   password: 'admin',
    //   entities: [Book, BookDetail, Author], // パスで指定できないか調査する
    //   synchronize: true,
    //   logging: true,
    //   cache: false,
    // }),
    TypeOrmModule.forRoot(),
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, MaxLength, Min } from 'class-validator';

@InputType()
export class NewBookInput {
  @Field()
  @MaxLength(50)
  title: string;

  @Field(() => Int)
  @Min(0)
  @Max(9999)
  price: number;
}

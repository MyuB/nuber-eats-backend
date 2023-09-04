import { ArgsType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { IsBoolean, Length } from 'class-validator';

@ArgsType()
export class CreateRestaurantDto {
  @Field(() => String)
  @IsString()
  @Length(5, 10)
  name: string;

  @Field(() => Boolean)
  @IsBoolean()
  isVegan?: boolean;

  @Field(() => String)
  @IsString()
  address: string;

  @Field(() => String)
  ownersName: string;
}

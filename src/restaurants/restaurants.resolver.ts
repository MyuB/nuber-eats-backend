import { Resolver, Query } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurants.entity';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  @Query(() => Restaurant)
  myRestaurant() {
    return true;
  }
}

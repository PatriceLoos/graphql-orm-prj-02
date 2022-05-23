import { Resolver, Query } from 'type-graphql';
import AppInfo from '../types/objects/Info';
import { environment } from '../../../../environment';

@Resolver()
class InfoResolver {
  @Query(() => AppInfo, { description: 'API info' })
  info(): AppInfo {
    return {
      port: Number(environment.PORT),
      healthy: true,
    };
  }
}

export default InfoResolver;

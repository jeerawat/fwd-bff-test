import {ContainerConfiguration, Scope} from 'typescript-ioc';
import {HelloWorldApi} from './hello-world.api';
import {HelloWorldService} from './hello-world.service';

import {ProductApi} from './product.api';
import {ProductService} from './product.service';

const config: ContainerConfiguration[] = [
  {
    bind: HelloWorldApi,
    to: HelloWorldService,
    scope: Scope.Singleton
  },
  {
    bind: ProductApi,
    to: ProductService,
    scope: Scope.Singleton
  }
];

export default config;
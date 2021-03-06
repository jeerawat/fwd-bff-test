import { Container } from "typescript-ioc";

export * from './hello-world.api';
export * from './hello-world.service';

export * from './product.api';
export * from './product.service';

import config from './ioc.config';

Container.configure(...config);
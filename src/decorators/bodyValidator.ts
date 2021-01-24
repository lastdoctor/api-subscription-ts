import 'reflect-metadata';

import { MetadataKeys } from '../Constants';

export function BodyValidator(...keys: Array<string>): MethodDecorator {
  return function(target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.VALIDATOR, key, target, key);
  };
}
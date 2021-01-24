import 'reflect-metadata';

export function Injectable(): ClassDecorator {
  return function(target: any) {
    if (Reflect.hasOwnMetadata('paramtypes', target)) {
      throw new Error('Duplicated injectable decorator');
    }

    const types = Reflect.getMetadata('design:paramtypes', target) || [];
    Reflect.defineMetadata('paramtypes', types, target);
    return target;
  };
}
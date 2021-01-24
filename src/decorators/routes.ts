import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetadataKeys, Methods } from '../Constants';

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler
}

function routeBinder(method: string) {
  return function (path: string) {
    return function(target: any, key: string, descriptor: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeys.PATH, path, target, key);
      Reflect.defineMetadata(MetadataKeys.METHOD, method, target, key);
    }
  }
}

export const Get = routeBinder(Methods.GET);
export const Post = routeBinder(Methods.POST);
export const Put = routeBinder(Methods.PUT);
export const Patch = routeBinder(Methods.PATCH)
export const Delete = routeBinder(Methods.DELETE);


import { NextFunction, RequestHandler, Request, Response } from 'express';
import { AppRouter } from '../AppRouter';
import { MetadataKeys, Methods } from '../Constants';

// function bodyValidator(keys: Array<string>): RequestHandler {
//   return function(req: Request, res: Response, next: NextFunction) {
//     if (!req.body) {
//       res.status(400).json({ message: 'Bad Request!' });
//       return;
//     }
//     for (let key of keys) {
//       if (!req.body.key) {
//         res.status(400).json({ message: 'Bad Request!' });
//
//         return;
//       }
//     }
//
//     next();
//   };
// }

export function Controller(routePrefix: string): ClassDecorator {
  const router = AppRouter.getInstance();

  return function(target: Function) {
    for(let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(MetadataKeys.PATH, target.prototype, key);
      const method: Methods = Reflect.getMetadata(MetadataKeys.METHOD, target.prototype, key);
      const middlewares = Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target.prototype, key) || [];
      // const requiredBodyProps = Reflect.getMetadata(MetadataKeys.VALIDATOR, target.prototype, key) || [];
      // const validator = bodyValidator(requiredBodyProps);

      if (path) {
        // router.get === router['get']
        // router.get('(routePrefix)->/auth (path)->/login', function(req, middlewares, validator, res){})
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
      }
    }
  };
}
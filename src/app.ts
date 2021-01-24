import express, { Application } from 'express';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import { AppRouter } from './AppRouter';

// Controllers (route handlers)
import './controllers';

// Create Express server antd export
export const app: Application = express();

// App configuration
app.use(morgan('dev'));
app.use(cors());
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(AppRouter.getInstance());
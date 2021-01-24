import http from 'http';
import { app } from './app';
import { PORT } from './config';

http.createServer(app).listen(PORT, () => {
  console.log(`Application is listening on port ${PORT}`);
});

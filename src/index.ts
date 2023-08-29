import 'dotenv/config';
import { AppDataSource } from './data-source';
import * as express from 'express';
import { Application, Request, Response } from 'express';

const PORT = 8000;

const app: Application = express();
app.use(express.json());

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log('server up!!!');
    });
  })
  .catch((error) => console.log(error));

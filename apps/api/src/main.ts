import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as functions from 'firebase-functions';
import * as helmet from "helmet"

const server = express();

export const createServer = async (instance) => {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(instance), {cors: true});
  app.use(helmet());
  return app.init();
}

createServer(server)
  .then(v => Logger.log('Nest Ready'))
  .catch(err => Logger.error('Nest broken', err));

export const api = functions.https.onRequest(server);

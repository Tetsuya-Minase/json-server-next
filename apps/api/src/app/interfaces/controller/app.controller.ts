import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';

@Controller()
export class AppController {
  @Get()
  getRoot(@Res() res: Response): void {
    return res.sendFile(path.join(__dirname, '../../../../dist/json-server/index.html'));
  }
}

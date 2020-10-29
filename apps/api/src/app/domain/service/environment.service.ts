import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

type ServiceAccount = {
  [key: string]: string;
}

@Injectable()
export class EnvironmentService {
  private readonly _dbUrl: string;
  private readonly _dbCollection: string;
  private readonly _serviceAccount: ServiceAccount;

  constructor(private readonly configService: ConfigService) {
    this._dbUrl = configService.get<string>('DATABASE_URL');
    this._dbCollection = configService.get<string>('DATABASE_COLLECTION');
    this._serviceAccount = JSON.parse(configService.get<string>('SERVICE_ACCOUNT'));
  }

  get dbUrl(): string {
    return this._dbUrl;
  }
  get dbCollection(): string {
    return this._dbCollection;
  }
  get serviceAccount(): ServiceAccount {
    return this._serviceAccount;
  }
}

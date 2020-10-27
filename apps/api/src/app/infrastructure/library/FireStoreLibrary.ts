import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import QuerySnapshot = admin.firestore.QuerySnapshot;
import { EnvironmentService } from '../../domain/service/environment.service';

@Injectable()
export class FireStoreLibrary {
  private readonly DB_CLIENT: admin.firestore.Firestore;

  constructor(private readonly environmentService: EnvironmentService) {
    admin.initializeApp({
      credential: admin.credential.cert(environmentService.serviceAccount),
      databaseURL: environmentService.dbUrl
    });
    this.DB_CLIENT = admin.firestore();
  }

  async getAll<T>(): Promise<T[]> {
    return this.DB_CLIENT
      .collection('sample')
      .get()
      .then(docs => {
        let results = [];
        docs.forEach(doc => {
          if (!doc.exists) {
            return;
          }
          console.log(doc.data());
          results.push(doc.data());
        })
        return [...results];
      });
  }

  async getByKey<T>(key: string): Promise<T> {
    // @ts-ignore
    return await this.DB_CLIENT.getAll();
  }

  async registerOne(data: any): Promise<void> {
    await this.DB_CLIENT.getAll();
  }

  async deleteAll(): Promise<void> {
    await this.DB_CLIENT.getAll();
  }
}

import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { EnvironmentService } from '../../domain/service/environment.service';
import DocumentData = admin.firestore.DocumentData;
import CollectionReference = admin.firestore.CollectionReference;
import QuerySnapshot = admin.firestore.QuerySnapshot;
import { JsonDataEntity } from '../../domain/model/entity/JsonDataEntity';

@Injectable()
export class FireStoreLibrary {
  private readonly DB_CLIENT: admin.firestore.Firestore;
  private readonly DB_COLLECTION: CollectionReference<DocumentData>;

  constructor(private readonly environmentService: EnvironmentService) {
    admin.initializeApp({
      credential: admin.credential.cert(environmentService.serviceAccount),
      databaseURL: environmentService.dbUrl
    });
    this.DB_CLIENT = admin.firestore();
    this.DB_COLLECTION = admin.firestore().collection('sample');
  }

  async getAll(): Promise<JsonDataEntity[]> {
    const snapshots: QuerySnapshot<DocumentData> = await this.DB_COLLECTION.get();
    const result: JsonDataEntity[] = [];
    snapshots.forEach(doc => {
      if (!doc.exists) {
        return;
      }
      result.push({ key: doc.id, data: doc.data() });
    });
    return result;
  }

  async getByKey(key: string): Promise<JsonDataEntity | undefined> {
    const doc = await this.DB_COLLECTION.doc(key).get();
    if (!doc.exists) {
      return undefined;
    }
    return { key: doc.id, data: doc.data() };
  }

  async register(key: string, data: unknown): Promise<void> {
    await this.DB_COLLECTION.doc(key).set(data);
  }

  async deleteByKey(key: string): Promise<void> {
    await this.DB_COLLECTION.doc(key).delete();
  }
}

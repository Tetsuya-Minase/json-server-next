import { Injectable } from '@nestjs/common';
import { JsonDataEntity } from '../../domain/model/entity/JsonDataEntity';
import { FireStoreLibrary } from '../library/FireStoreLibrary';

/**
 * Json Data Repository
 */
@Injectable()
export class JsonDataRepository {
  constructor(private readonly fireStoreLibrary: FireStoreLibrary) {}

  /**
   * fetch json list.
   * @return {@link JsonDataValue}
   */
  async fetchJsonAll(): Promise<JsonDataEntity[]> {
    return await this.fireStoreLibrary.getAll<JsonDataEntity>();
  }

  /**
   * fetch Json data by key.
   * @param key json key
   * @return {@link JsonDataValue}
   */
  async fetchJsonByKey(key: string): Promise<JsonDataEntity> {
    return this.fireStoreLibrary.getByKey<JsonDataEntity>(key);
  }

  /**
   * register Json Data.
   */
  async registerJson(entity: JsonDataEntity): Promise<void> {
    await this.fireStoreLibrary.registerOne(entity);
  }

  async deleteAll(): Promise<void> {
    await this.fireStoreLibrary.deleteAll();
  }
}

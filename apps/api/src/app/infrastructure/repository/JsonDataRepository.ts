import { Injectable } from '@nestjs/common';
import { FireStoreLibrary } from '../library/FireStoreLibrary';
import { JsonDataValue } from '../../domain/model/object/JsonDataValue';
import { JsonDataEntity } from '../../domain/model/entity/JsonDataEntity';

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
  async fetchAll(): Promise<JsonDataEntity[]> {
    return await this.fireStoreLibrary.getAll();
  }

  /**
   * fetch Json data by key.
   * @param key json key
   * @return {@link JsonDataValue}
   */
  async fetchByKey(key: string): Promise<JsonDataEntity> {
    return this.fireStoreLibrary.getByKey(key);
  }

  /**
   * register Json Data.
   * @param key key名
   * @param value 登録するデータ
   */
  async register(key: string, value: JsonDataValue): Promise<void> {
    await this.fireStoreLibrary.register(key, value);
  }

  /**
   * delete json data by key.
   * @param key key名
   */
  async deleteByKey(key: string): Promise<void> {
    await this.fireStoreLibrary.deleteByKey(key);
  }
}

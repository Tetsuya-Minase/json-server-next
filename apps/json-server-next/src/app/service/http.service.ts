import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Maybe } from '../common/types/utility';
import { Observable } from 'rxjs';
import { APIResponse } from '../model/JsonData';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private readonly httpClient: HttpClient) {}

  fetch(url: string): Observable<APIResponse> {
    return this.httpClient.get<APIResponse>(url);
  }

  register(url: string, data: {[key: string]: Maybe<string>}): Observable<any> {
    return this.httpClient.put(url, data);
  }
}

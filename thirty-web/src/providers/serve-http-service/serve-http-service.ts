import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServeHttpServiceProvider {

  object: Object;

  private API_URL = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }

  httpCreate(uriPath: string, object) {
    return this._http.post(`${this.API_URL}${uriPath}`, object);
  }

  httpRead(uriPath: string) {
    return this._http.get(`${this.API_URL}${uriPath}`);
  }

  httpUpdate(uriPath: string, object) {
    return this._http.put(`${this.API_URL}${uriPath}`, object);
  }

  httpDelete(uriPath: string, object) {
    return this._http.delete(`${this.API_URL}${uriPath}`, object);
  }

}

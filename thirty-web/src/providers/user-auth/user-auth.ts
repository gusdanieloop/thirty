import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../../pages/login/user.object';

@Injectable()
export class UserAuthProvider {

  private _userAuth: User;
  private _uriPathDao: string = '/login/loginRequest';

  constructor(private _http: HttpClient) {}

  loginRequest(email, password) {
    return this._http.post<User>(this._uriPathDao, { email, password })
      .do((user: User) => this._userAuth);
    // .subscribe(
    //   (user: User) => {
    //     console.log('user', user);
    //   },
    //   error => alert('Ocorreu um erro.')
    //   );
  }

  getUserAuth

}

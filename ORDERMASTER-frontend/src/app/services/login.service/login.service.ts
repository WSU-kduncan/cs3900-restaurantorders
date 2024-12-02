import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {}

  login(username: string, password: string): Observable<any> {
    const fakeUser = {
      username: 'testuser',
      password: 'password123'
    };

    return new Observable(observer => {
      setTimeout(() => {
        if (username === fakeUser.username && password === fakeUser.password) {
          observer.next({ success: true, message: 'Login successful!' });
        } else {
          observer.error({ success: false, message: 'Invalid username or password' });
        }
        observer.complete();
      }, 1000);
    });
  }
}
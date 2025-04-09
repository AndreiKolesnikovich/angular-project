import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  private apiUrl = 'http://localhost:3000';
  user$ : Observable<ResponseUser> = of(null);
  constructor(private http: HttpClient) {
    
  }

  signUp(user: RequestForRegisterUser): Observable<ResponseUser> {
    return this.http.post<ResponseUser>(`${this.apiUrl}/register`, user);
  }

  signIn(credentials: { email: string; password: string }): Observable<ResponseUser> {
    this.user$ = this.http.post<ResponseUser>(`${this.apiUrl}/login`, credentials);    
    return this.user$;
  }

  signOut() {
    this.user$ = of(null);
  }
}

export type ResponseUser = {
  username: string,
  email: string,
  accessToken : string,
  id: string
}| null

export type RequestForRegisterUser = {
  username: string,
  email: string,
  password: string,
}| null
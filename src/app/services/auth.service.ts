import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { API_CONFIG } from '../config/api.config';
 import { Credencias } from '../models/Credencias';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http: HttpClient
  private jwtService: JwtHelperService = new JwtHelperService

  constructor(http: HttpClient) {
    this.http = http
  }

  authenticate(creds: Credencias) {
    return this.http.post(`${API_CONFIG.baseUrl}/login`, creds, {
      observe: 'response',
      responseType: 'text'
    })
  }

  successfulLogin(authToken: string) {
    localStorage.setItem('token', authToken);
  }

  isAuthenticate() {
      let token = localStorage.getItem('token')
      if(token != null) {
        return !this.jwtService.isTokenExpired(token)
      }
      return false
  }

}

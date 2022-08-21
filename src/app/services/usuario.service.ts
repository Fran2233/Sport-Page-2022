import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl: string = environment.baseUrl;


  constructor(private http: HttpClient) { }


  validarToken() {
    const token = localStorage.getItem('token') || '';


    return this.http.get(`${this.baseUrl}/login/renew`, {
      headers: {
        'x-token': token
      }
    });
  }




  createUser(formData: RegisterForm) {

    return this.http.post(`${this.baseUrl}/usuarios`, formData)
      .pipe(
        tap((res: any) => {
          localStorage.setItem('token', res.token)
        })
      )

  }


  login(formData: LoginForm) {
    return this.http.post(`${this.baseUrl}/login`, formData)
      .pipe(
        tap((res: any) => {
          localStorage.setItem('token', res.token)
        })
      )
  }


  loginGoogle(token: string) {
    return this.http.post(`${this.baseUrl}/login/google`, { token })
      .pipe(
        tap((res: any) => {
          localStorage.setItem('token', res.token)
        })
      )
  }

}

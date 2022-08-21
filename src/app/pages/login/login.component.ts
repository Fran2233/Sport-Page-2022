import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public formSubmitted = false;

  public loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    remember: [false]
  });


  constructor(private router: Router,
    private fb: FormBuilder,
    private userService: UsuarioService) { }



  ngOnInit(): void {
  }



  login() {
    this.userService.login(this.loginForm.value)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {

          if (err.error.errores) {
            if (err.error.errores.password) {
              console.log(err.error.errores.password.msg);
              Swal.fire('Error', err.error.errores.password.msg, 'error');
            } else if (err.error.errores.email) {
              console.log(err.error.errores.email.msg);
              Swal.fire('Error', err.error.errores.email.msg, 'error');
            }
          } else if (err.error) {
            Swal.fire('Error', err.error.msg, 'error');
          }









        }
      })
  }

}

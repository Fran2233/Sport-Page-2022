import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';

declare const google: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('googleBtn') googleBtn!: ElementRef;

  public formSubmitted = false;

  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', Validators.required],
    password: ['', Validators.required],
    remember: [false]
  });


  constructor(private router: Router,
    private fb: FormBuilder,
    private userService: UsuarioService) { }

  ngAfterViewInit(): void {
    this.googleInit();
  }


  googleInit() {
    google.accounts.id.initialize({
      client_id: "669890155472-5gb91dfkotjhm4c6renkrchg0m245i11.apps.googleusercontent.com",
      callback: (response:any) =>  this.handleCredentialResponse(response)
    });
    
    google.accounts.id.renderButton(
      // document.getElementById("buttonDiv"),
      this.googleBtn.nativeElement,
      { theme: "outline", size: "large" }  // customization attributes
    );
  }

  handleCredentialResponse(response: any) {
    // console.log("Encoded JWT ID token: " + response.credential);
    this.userService.loginGoogle(response.credential)
    .subscribe(res =>{
      console.log('login :', res);
      this.router.navigateByUrl('/home');
    })
  }

  ngOnInit(): void {
  }



  login() {
    this.userService.login(this.loginForm.value)
      .subscribe({
        next: (res) => {
          if (this.loginForm.get('remember')!.value) {
            localStorage.setItem('email', this.loginForm.get('email')!.value)
          } else {
            localStorage.removeItem('email')
          }
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

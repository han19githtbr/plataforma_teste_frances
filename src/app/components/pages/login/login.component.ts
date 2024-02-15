import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = fb.group(
      {
        email: ['exemplo@gmail.com', [Validators.email, Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      }
    )
  }

  ngOnInit() {
    console.log(localStorage.getItem('user'));
  }


  submit() {

    let dataLogin = this.loginForm.getRawValue();

    if(this.loginForm.valid){
      this.authService.login(dataLogin).subscribe(
        dataServer => {
          if(dataServer){
            if(dataLogin.password == dataServer.password) {

                delete dataServer.password;
                localStorage.setItem('user', JSON.stringify(dataServer) );
                alert('Usuário logado com sucesso!')
            } else {
                alert('Usuário ou senha Inválido!')
            }
          }else{
            alert('Usuário não cadastrado!')
          }
          // console.log(dataServer);
        }
      )
    }
  }


  /*submit() {

    let dataLogin = this.loginForm.getRawValue();

    if(this.loginForm.valid){
      this.authService.login(dataLogin).subscribe(
        dataServer => {
          if(dataServer.length > 0){
            if(dataLogin.password == dataServer[0].password) {

                delete dataServer[0].password;
                localStorage.setItem('user', JSON.stringify(dataServer[0]) )
                alert('Usuário logado com sucesso!')
            } else {
                alert('Usuário ou senha Inaválido!')
            }
          }else{
            alert('Usuário não cadastrado!')
          }
          // console.log(dataServer);
        }
      )
    }
  }*/
}

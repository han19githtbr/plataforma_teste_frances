import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
//import { AuthService } from '../../../../../backend/services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = fb.group(
      {
        name: ['', [ Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        type: ['usuário']
      }
    )
  }

  ngOnInit() {
    console.log(localStorage.getItem('user'));
  }

  submit() {

    let dataRegister = this.registerForm.getRawValue();

    if(this.registerForm.valid){
      this.authService.register(dataRegister).subscribe(
        dataServer => {

            delete dataServer.password;
            localStorage.setItem('user', JSON.stringify(dataServer) )
            alert('Usuário logado com sucesso!')

        }
      )
    }
  }

}

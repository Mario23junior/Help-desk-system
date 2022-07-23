import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Credencias } from 'src/app/models/Credencias';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credencias = {
    email: '',
    senha: ''
  }
  
  email = new FormControl(null,Validators.email)
  senha = new FormControl(null,Validators.minLength(3))
  
  constructor() { }

  ngOnInit(): void {
  }

  public validFilds(): boolean {
    if(this.email.valid && this.senha.valid) {
      return true
    } else {
      return false
    }
  }

}

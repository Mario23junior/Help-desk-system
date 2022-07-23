import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credencias } from 'src/app/models/Credencias';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private toast: ToastrService;

  public creds: Credencias = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email)
  senha = new FormControl(null, Validators.minLength(3))

  constructor(toast: ToastrService) { 
    this.toast = toast
  }
  


  ngOnInit(): void {
  }

  public validFilds(): boolean {
    if (this.email.valid && this.senha.valid) {
      return true
    } else {
      return false
    }
  }

  public logar() {
    this.toast.error(
      'Usuario e senha invalidos por favor insira valores validos','Login operation')
      this.creds.senha = ''
      this.creds.email = ''
  }

}

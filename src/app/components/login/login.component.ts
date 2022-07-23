import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credencias } from 'src/app/models/Credencias';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private toast: ToastrService;
  private service: AuthService
  private router: Router


  public creds: Credencias = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email)
  senha = new FormControl(null, Validators.minLength(3))

  constructor(toast: ToastrService, service: AuthService,router: Router) {
    this.toast = toast
    this.service = service
    this.router = router
  }

  ngOnInit(): void {
  }

  public validFilds(): boolean {
    return this.email.valid && this.senha.valid
  }

  logar() {
    this.service.authenticate(this.creds).subscribe(resposta => {
      this.service.successfulLogin(resposta.headers.get('Authorization')!.substring(7))
      this.router.navigate([''])
    }, () => {
      this.toast.error('Usuario e / ou inválida')
    })
  }

}

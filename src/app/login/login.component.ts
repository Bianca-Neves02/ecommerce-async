import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  onSubmit() {
    // Aqui você pode adicionar a lógica para processar o envio do formulário.
    // Por exemplo, fazer uma chamada de autenticação ou validação dos campos.
    if (this.username === 'usuario' && this.password === 'senha') {
      // Credenciais válidas, redirecione ou execute ação desejada após o login.
      this.errorMessage = '';
      // Por exemplo, você pode redirecionar para outra página usando o roteador:
      // this.router.navigate(['/dashboard']);
    } else {
      // Credenciais inválidas, exiba uma mensagem de erro.
      this.errorMessage = 'Credenciais inválidas. Tente novamente.';
    }
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'minha-aplicacao-login';
  dados: any[] = [];

  ngOnInit() {
    this.buscarDados();
  }

  buscarDados() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        this.dados = JSON.parse(xhr.responseText);
        console.log(this.dados);
      }
    };

    xhr.send();
  }
}
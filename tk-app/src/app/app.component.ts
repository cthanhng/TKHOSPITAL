import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setInterval(() => {
      let client = localStorage.getItem('client');
      if (client == null) {
        this.isAdmin = false;
        return;
      }

      this.isAdmin = JSON.parse(client).type === 'admin';
      // this.isUser=JSON.parse(client).type === 'user';
    });
  }

  title = 'tk-app';
  isAdmin = false;
}

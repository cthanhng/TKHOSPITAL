import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  client: any;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.client = JSON.parse(localStorage.getItem('client')!);
    }, 1_000);
  }
}

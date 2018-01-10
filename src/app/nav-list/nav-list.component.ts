import { Component } from '@angular/core';

interface Page {
  link: string;
  name: string;
}

@Component({
  selector: 'nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent {
  pages: Page[] = [
    { link: "/", name: "Main" },
    { link: "/products", name: "Products" }
  ];
}

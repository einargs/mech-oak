import { Component } from '@angular/core';

interface Page {
  link: string;
  name: string;
  sections: string[];
}

@Component({
  selector: 'nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent {
  pages: Page[] = [
    { link: "", name: "Main", sections: ["about", "info"] },
    { link: "/products", name: "Products", sections: ["3d-printing", "engraving", "t-shirts"] }
  ];
}

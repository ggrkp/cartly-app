import { Component } from '@angular/core';
import { ProductList } from "./components/product/product-list/product-list";

@Component({
  selector: 'app-root',
  imports: [ ProductList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}

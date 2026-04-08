import { Component } from '@angular/core';
import { Sidebar } from "./components/common/sidebar/sidebar";
import { Navbar } from "./components/common/navbar/navbar";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [Sidebar, Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}

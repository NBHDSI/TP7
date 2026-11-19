import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-book-list',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookList {}

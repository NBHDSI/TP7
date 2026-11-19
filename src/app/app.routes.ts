import { Routes } from '@angular/router';
import { Presentation } from './components/front/presentation/presentation';
import { BookList } from './components/front/book-list/book-list';
import { PoetryList } from './components/front/poetry-list/poetry-list';
import { NovelList } from './components/front/novel-list/novel-list';
import { BiographyList } from './components/front/biography-list/biography-list';
import { SelectedNovel } from './components/front/selected-novel/selected-novel';
import { Aboutus } from './components/front/aboutus/aboutus';
import { Error } from './components/error/error';

export const routes: Routes = [
  { path: "presentation", title: "Présentation", component: Presentation },
  { path: "allBooks", title: "Liste des livres", component: BookList,
    children: [
      { path: "poetry", title: "Poésie", component: PoetryList },
      { path: "novels", title: "Romans", component: NovelList },
      { path: "novels/:idN", title: "Roman sélectionné", component: SelectedNovel },
      { path: "biography", title: "Biographie", component: BiographyList },
      { path: "", redirectTo: "novels", pathMatch: "full" }
    ]
  },
  { path: "aboutus", title: "A propos", component: Aboutus },
  { path: "", redirectTo: "presentation", pathMatch: "full" },
  { path: "**", title: "Erreur", component: Error }
];

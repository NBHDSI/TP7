import { Service, signal } from '@angular/core';
import { Novel } from '../model/novel';

@Service()
export class NovelService {
  private _novels = signal<Novel[]>([
    { id: 10, title: "17 Ramadan", author: "Non précisé", category: "roman", price: 18.5, isNew: false },
    { id: 20, title: "Pivoine", author: "Pearl Buck", category: "roman", price: 22, isNew: false },
    { id: 30, title: "Vent D'est Vent D'ouest", author: "Pearl Buck", category: "roman", price: 25.3, isNew: true },
    { id: 40, title: "La Tresse", author: "Laetitia Colombani", category: "roman", price: 19.9, isNew: false },
    { id: 50, title: "Haroun Erachid", author: "Non précisé", category: "roman", price: 15, isNew: true },
    { id: 60, title: "Terre Chinoise", author: "Pearl Buck", category: "roman", price: 28.5, isNew: false }
  ]);

  readonly novels = this._novels.asReadonly();

  getNovelById(id: number): Novel | undefined {
    return this._novels().find(n => n.id == id);
  }

  deleteNovel(id: number) {
    const newList: Novel[] = [];
    for (const n of this._novels()) {
      if (n.id != id) {
        newList.push(n);
      }
    }
    this._novels.set(newList);
  }
}

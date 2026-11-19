import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { Novel } from '../../../model/novel';
import { NovelService } from '../../../services/novel-service';

@Component({
  selector: 'app-selected-novel',
  imports: [UpperCasePipe],
  templateUrl: './selected-novel.html',
  styleUrl: './selected-novel.css'
})
export class SelectedNovel implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly novelService = inject(NovelService);
  private readonly router = inject(Router);
  novel = signal<Novel | undefined>(undefined);

  ngOnInit(): void {
    let idNovel = this.activatedRoute.snapshot.paramMap.get('idN');
    if (idNovel) {
      this.novel.set(this.novelService.getNovelById(Number(idNovel)));
    }
  }

  onBackToNovels() {
    this.router.navigate(["/allBooks/novels"]);
  }

  onDeleteNovel(id: number) {
    this.novelService.deleteNovel(id);
    this.router.navigate(["/allBooks/novels"]);
  }
}

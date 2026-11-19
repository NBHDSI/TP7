import { Component, inject, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Novel } from '../../../model/novel';
import { NovelService } from '../../../services/novel-service';

@Component({
  selector: 'app-novel-list',
  imports: [RouterLink],
  templateUrl: './novel-list.html',
  styleUrl: './novel-list.css'
})
export class NovelList {
  private readonly novelService = inject(NovelService);
  novels: Signal<Novel[]> = this.novelService.novels;
}

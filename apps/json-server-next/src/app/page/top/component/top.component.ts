import { Component } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent {
  readonly links = {
    edit: {
      type: 'text',
      url: '/edit',
      text: '登録ページ'
    },
    list: {
      type: 'text',
      url: '/list',
      text: '登録内容一覧'
    }
  } as const;
}

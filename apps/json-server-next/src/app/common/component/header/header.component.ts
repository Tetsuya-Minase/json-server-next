import { Component } from '@angular/core';
import { ButtonLink, ImageLink } from '../../../model/objects/LinkValue';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private readonly topLink: ImageLink = {
    type: 'image',
    url: '/',
    imageUrl: 'assets/logo.svg',
    alt: 'JSON SERVER'
  } as const;
  private readonly editLink: ButtonLink = {
    type: 'button',
    url: '/edit',
    text: '編集'
  } as const;
  private readonly listLink: ButtonLink = {
    type: 'button',
    url: '/list',
    text: '一覧'
  } as const;

  readonly links = {
    top: this.topLink,
    edit: this.editLink,
    list: this.listLink
  } as const;
}

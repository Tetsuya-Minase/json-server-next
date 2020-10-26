import { Component, Input } from '@angular/core';
import { LinkValue } from '../../../model/objects/LinkValue';

@Component({
  selector: 'atom-router-link',
  templateUrl: './router-link.component.html',
  styleUrls: ['./router-link.component.scss'],
})
export class RouterLinkComponent {
  @Input() linkObject: LinkValue;
}

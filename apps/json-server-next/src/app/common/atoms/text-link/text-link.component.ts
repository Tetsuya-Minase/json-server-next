import { Component, Input } from '@angular/core';
import { LinkValue } from '../../../model/objects/LinkValue';

@Component({
  selector: 'text-link',
  templateUrl: './text-link.component.html',
  styleUrls: ['./text-link.component.scss']
})
export class TextLinkComponent {
  @Input() linkObject: LinkValue;
}

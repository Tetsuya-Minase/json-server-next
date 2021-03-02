import { Component, Input } from '@angular/core';
import { ButtonLink, ImageLink, LinkValue, TextLink } from '../../../model/objects/LinkValue';

@Component({
  selector: 'a-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input() linkValue: LinkValue;

  isTextLink(linkValue: LinkValue): linkValue is TextLink {
    return linkValue.type === 'text';
  }

  isButtonLink(linkValue: LinkValue): linkValue is ButtonLink {
    return linkValue.type === 'button';
  }

  isImageLink(linkValue: LinkValue): linkValue is ImageLink {
    return linkValue.type === 'image';
  }
}

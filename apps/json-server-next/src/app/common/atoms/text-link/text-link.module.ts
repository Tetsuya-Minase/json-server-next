import { NgModule } from '@angular/core';
import { TextLinkComponent } from './text-link.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [TextLinkComponent],
  declarations: [TextLinkComponent]
})
export class TextLinkModule {
}

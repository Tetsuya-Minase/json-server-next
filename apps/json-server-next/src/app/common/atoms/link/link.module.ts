import { NgModule } from '@angular/core';
import { LinkComponent } from './link.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [LinkComponent],
  declarations: [LinkComponent]
})
export class LinkModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './component/top.component';
import { RouterModule } from '@angular/router';
import { TextLinkModule } from '../../common/atoms/text-link/text-link.module';

@NgModule({
  declarations: [TopComponent],
  imports: [CommonModule, RouterModule, TextLinkModule],
  exports: [TopComponent]
})
export class TopModule {
}

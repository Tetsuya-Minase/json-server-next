import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './component/top.component';
import { RouterModule } from '@angular/router';
import { LinkModule } from '../../common/atoms/link/link.module';

@NgModule({
  declarations: [TopComponent],
  imports: [CommonModule, RouterModule, LinkModule],
  exports: [TopComponent]
})
export class TopModule {
}

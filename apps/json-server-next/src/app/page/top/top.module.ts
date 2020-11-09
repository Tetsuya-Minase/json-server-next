import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './component/top.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopComponent],
  imports: [CommonModule, RouterModule],
  exports: [TopComponent],
})
export class TopModule {}

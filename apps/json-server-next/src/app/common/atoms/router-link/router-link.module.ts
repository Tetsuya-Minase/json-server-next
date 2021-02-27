import { NgModule } from '@angular/core';
import { RouterLinkComponent } from './router-link.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [RouterLinkComponent],
  declarations: [RouterLinkComponent]
})
export class RouterLinkModule {
}

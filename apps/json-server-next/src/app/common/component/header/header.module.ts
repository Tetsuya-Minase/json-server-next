import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterLinkModule } from '../../atoms/router-link/router-link.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterLinkModule],
  exports: [HeaderComponent]
})
export class HeaderModule {
}

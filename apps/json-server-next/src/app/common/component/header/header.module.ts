import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TextLinkModule } from '../../atoms/text-link/text-link.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, TextLinkModule],
  exports: [HeaderComponent]
})
export class HeaderModule {
}

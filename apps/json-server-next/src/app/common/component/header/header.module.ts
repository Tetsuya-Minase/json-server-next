import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterLinkComponent } from '../../atoms/router-link/router-link.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, RouterLinkComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}

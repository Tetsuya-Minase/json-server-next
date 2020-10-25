import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './component/list.component';
import { ListService } from './service/list.service';
import { ListRoutingModule } from './list-routing.module';
import { ButtonModule } from '../../common/atoms/button/button.module';

@NgModule({
  imports: [CommonModule, ListRoutingModule, ButtonModule],
  declarations: [ListComponent],
  providers: [ListService],
})
export class ListModule {}

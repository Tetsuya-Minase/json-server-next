import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './component/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRoutingModule } from './edit-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormErrorComponent } from '../../common/component/form-error/form-error.component';
import { EditService } from './service/edit.service';
import { ButtonModule } from '../../common/atoms/button/button.module';

@NgModule({
  declarations: [EditComponent, FormErrorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditRoutingModule,
    MatSlideToggleModule,
    ButtonModule,
  ],
  providers: [EditService],
})
export class EditModule {}

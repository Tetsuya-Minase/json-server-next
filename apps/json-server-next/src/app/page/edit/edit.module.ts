import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './component/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRoutingModule } from './edit-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EditService } from './service/edit.service';
import { ButtonModule } from '../../common/atoms/button/button.module';
import { FormErrorModule } from '../../common/component/form-error/form-error.module';

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditRoutingModule,
    MatSlideToggleModule,
    ButtonModule,
    FormErrorModule
  ],
  providers: [EditService]
})
export class EditModule {
}

import { NgModule } from '@angular/core';

import { FormErrorComponent } from './form-error.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [FormErrorComponent],
  declarations: [FormErrorComponent]
})
export class FormErrorModule {
}

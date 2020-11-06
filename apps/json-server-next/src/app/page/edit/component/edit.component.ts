import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { EditService } from '../service/edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent{
  readonly formGroup = this.fb.group({
    name: [null, Validators.required],
    rawData: [null, [Validators.required, this.jsonValidator()]],
    keyValueList: this.fb.array([
      this.fb.group({
        ['key0']: [null, Validators.required],
        ['value0']: [null, Validators.required],
      }),
    ]),
  });
  isRawData = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly service: EditService,
  ) {}

  changeSlideToggle(event: MatSlideToggleChange) {
    this.isRawData = event.checked;
  }

  /**
   * KeyValueListの追加
   */
  addList() {
    this.keyValueList.push(
      this.fb.group({
        [`key${this.keyValueList.length}`]: [null, Validators.required],
        [`value${this.keyValueList.length}`]: [null, Validators.required],
      }),
    );
  }

  /**
   *
   */
  register() {
    this.service.registerJsonData(
      {
        name: this.name.value,
        rawData: this.rawData.value,
        keyValueList: this.keyValueList.value,
        isRawData: this.isRawData
      }
    );
  }

  hasError() {
    if (this.isRawData) {
      return this.name.invalid || this.rawData.invalid;
    }
    return this.name.invalid || this.keyValueList.invalid;
  }

  get name() {
    return this.formGroup.get('name');
  }

  get rawData() {
    return this.formGroup.get('rawData');
  }

  get keyValueList() {
    return this.formGroup.get('keyValueList') as FormArray;
  }

  private jsonValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      try {
        JSON.parse(control.value);
        return null;
      } catch (ex) {
        return { jsonValid: control.value };
      }
    };
  }
}

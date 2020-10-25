import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material';
import { EditService } from '../service/edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  readonly formGroup = this.fb.group({
    name: ['', Validators.required],
    rawData: ['', [Validators.required, this.jsonValidator()]],
    keyValueList: this.fb.array([
      this.fb.group({
        ['key0']: ['', Validators.required],
        ['value0']: ['', Validators.required],
      }),
    ]),
  });
  isRawData = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly service: EditService,
  ) {}

  get name() {
    return this.formGroup.get('name');
  }

  get rawData() {
    return this.formGroup.get('rawData');
  }

  get keyValueList() {
    return this.formGroup.get('keyValueList') as FormArray;
  }

  ngOnInit() {}

  changeSlideToggle(event: MatSlideToggleChange) {
    this.isRawData = event.checked;
  }

  /**
   * KeyValueListの追加
   */
  addList() {
    this.keyValueList.push(
      this.fb.group({
        ['key' + this.keyValueList.length]: ['', Validators.required],
        ['value' + this.keyValueList.length]: ['', Validators.required],
      }),
    );
  }

  /**
   *
   */
  register() {
    this.service.registerJsonData(
      this.name.value,
      this.rawData.value,
      this.keyValueList.value,
    );
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

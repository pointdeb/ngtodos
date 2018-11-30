import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'demong-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  formGroup: FormGroup;

  validationMessages: any;

  todoStates: {label: string; value: string}[];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      descriptions: ['', Validators.compose([Validators.required])],
      state: ['', Validators.compose([Validators.required])],
      start_date: ['', Validators.compose([Validators.required])],
      end_date: ['', Validators.compose([Validators.required])],
    });

    this.validationMessages = {
      required: 'Please provide this field',
      email: 'Please provide a valid email',
      custom: 'Unknow error',
    };

    this.todoStates = [
      { label: 'Untouched', value: 'untouched' },
      { label: 'Doing', value: 'pending' },
      { label: 'Paused', value: 'pause' },
      { label: 'Finished', value: 'finished' },
    ];
  }

  hasError(field: string): boolean {
    const control = this.formGroup.controls[field];
    if (!control) {
      return false;
    }
    return control.hasError('required') ? true :
      control.hasError('email') ? true :
      control.hasError('custom') ? true : false
      ;
  }

  getErrors(field: string) {
    const control = this.formGroup.controls[field];
    if (!control) {
      return false;
    }
    return control.hasError('required') ? this.validationMessages['required'] :
      control.hasError('email') ? this.validationMessages['email'] :
      control.hasError('custom') ? this.validationMessages['custom'] : 'Unknow error'
      ;
  }

}

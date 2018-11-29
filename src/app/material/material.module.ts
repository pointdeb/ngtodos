import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatCardModule,
 } from '@angular/material';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
  MatCardModule,
  MatFormFieldModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class MaterialModule { }

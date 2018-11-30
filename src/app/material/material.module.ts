import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatCardModule,
  MatTabsModule,
  MatCheckboxModule,
 } from '@angular/material';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
  MatCardModule,
  MatFormFieldModule,
  MatTabsModule,
  MatCheckboxModule,
  ScrollDispatchModule
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

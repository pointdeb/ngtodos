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
import { ScrollingModule } from '@angular/cdk/scrolling';
// import { ScrollingModule as ExperimentalScrollingModule } from '@angular/cdk-experimental/scrolling';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
  MatCardModule,
  MatFormFieldModule,
  MatTabsModule,
  MatCheckboxModule,
  ScrollingModule
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

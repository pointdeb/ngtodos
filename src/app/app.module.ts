import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodoListComponent } from './cards/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoAddComponent,
    TodoDetailComponent,
    NotFoundComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

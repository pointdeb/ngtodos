import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const AppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo-add', component: TodoAddComponent },
  { path: 'todo-detail', component: TodoDetailComponent },
  { path: '**', component: NotFoundComponent },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(AppRoutes);

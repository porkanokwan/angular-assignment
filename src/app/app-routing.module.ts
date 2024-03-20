import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedCounterComponent } from './shared-counter/shared-counter.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormFinancialComponent } from './form-financial/form-financial.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/counter', pathMatch: 'full' },
  { path: 'counter', component: SharedCounterComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'form-financial', component: FormFinancialComponent },
  { path: '**', redirectTo: '/counter', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

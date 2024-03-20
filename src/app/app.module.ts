import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { SharedCounterComponent } from './shared-counter/shared-counter.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormFinancialComponent } from './form-financial/form-financial.component';
import { AppRoutingModule } from './app-routing.module';
import { CounterItemComponent } from './shared-counter/counter-item/counter-item.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { LoanListComponent } from './form-financial/loan-list/loan-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedCounterComponent,
    TodoListComponent,
    FormFinancialComponent,
    CounterItemComponent,
    TodoItemComponent,
    LoanListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

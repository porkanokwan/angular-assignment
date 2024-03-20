import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css'],
})
export class LoanListComponent {
  @Input() loan: {
    borrowName: string;
    principal: string;
    tax: string;
    taxcal: string;
    years: string;
    total: number;
  };
  @Input() index: number;
  @Output() onDeleteLoan = new EventEmitter<number>();

  constructor() {}

  onDelete() {
    this.onDeleteLoan.emit(this.index);
  }
}

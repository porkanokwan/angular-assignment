import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoanType } from './form-financial.model';

@Component({
  selector: 'app-form-financial',
  templateUrl: './form-financial.component.html',
  styleUrls: ['./form-financial.component.css'],
})
export class FormFinancialComponent implements OnInit {
  loans: LoanType[] = [];
  taxOptions = ['Anually', 'Monthly'];
  interest: number[] = [];
  allInterest: number = 0;
  isSubmit = false;
  formFanancial: FormGroup;

  ngOnInit(): void {
    this.formFanancial = new FormGroup({
      borrowName: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern('^[A-Za-z]*$'),
      ]),
      principal: new FormControl('', [
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(6),
        Validators.maxLength(8),
      ]),
      tax: new FormControl('', [
        Validators.min(5),
        Validators.max(25),
        // Validators.pattern('^[0-9]d{0,2}(?:[.,]d{0,1})?'),
        this.validateDecimal.bind(this),
      ]),
      taxcal: new FormControl('Anually'),
      years: new FormControl('', [
        Validators.minLength(1),
        Validators.maxLength(2),
        Validators.pattern('^[0-9]*$'),
        this.validateRangeYears.bind(this),
      ]),
    });
  }

  validateDecimal(control: FormControl): { [s: string]: boolean } {
    const value = +control.value;
    if (
      isNaN(value) ||
      (!Number.isInteger(value) && String(value).split('.')[1].length > 1)
    ) {
      return { isNotIntregerOrDecimal: true };
    }

    return null;
  }

  validateRangeYears(control: FormControl): { [s: string]: boolean } {
    const value = +control.value;
    if (isNaN(value) || value === 0 || value > 10) {
      return { isNotInRange: true };
    }
    return null;
  }

  onSubmit() {
    this.isSubmit = true;
    if (this.formFanancial.valid) {
      const total =
        this.formFanancial.value.principal *
        (this.formFanancial.value.tax / 100) *
        this.formFanancial.value.years;
      this.allInterest += total;
      this.interest.push(total);
      this.loans.push({
        ...this.formFanancial.value,
        total: total.toFixed(2).toLocaleString(),
      });
      this.formFanancial.reset();
    }
    console.log(this.formFanancial);
  }

  onCancle() {
    this.formFanancial.reset({ taxcal: 'Anually' });
  }

  onDeleteLoans(i: number) {
    this.loans.splice(i, 1);
    this.allInterest = this.allInterest - this.interest[i];
    this.interest.splice(i, 1);
  }
}

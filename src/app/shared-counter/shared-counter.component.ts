import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-counter',
  templateUrl: './shared-counter.component.html',
  styleUrls: ['./shared-counter.component.css'],
})
export class SharedCounterComponent {
  counts: number[] = [];
  countNumber: number = 0;

  onAddCounter() {
    this.counts.push(0);
  }

  onPlusCounter(countObj: { count: number; index: number }) {
    this.counts[countObj.index] = countObj.count + 1;
    let sum = 0;
    for (let key in this.counts) {
      sum += this.counts[key];
    }
    this.countNumber = sum;
  }

  onMinusCounter(countObj: { count: number; index: number }) {
    this.counts[countObj.index] = countObj.count - 1;
    let sum = 0;
    for (let key in this.counts) {
      sum += this.counts[key];
    }
    this.countNumber = sum;
  }

  onDeleteCounter(index: number) {
    this.countNumber = this.countNumber - this.counts[index];
    this.counts.splice(index, 1);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-item',
  templateUrl: './counter-item.component.html',
  styleUrls: ['./counter-item.component.css'],
})
export class CounterItemComponent {
  @Input('countItem') count: number;
  @Input() index: number;

  @Output() plusCount = new EventEmitter<{ count: number; index: number }>();
  @Output() minusCount = new EventEmitter<{ count: number; index: number }>();
  @Output() deleteCount = new EventEmitter<number>();

  onPlus() {
    this.plusCount.emit({ count: this.count, index: this.index });
  }

  onMinus() {
    if (this.count > 0) {
      this.minusCount.emit({ count: this.count, index: this.index });
    }
  }

  onDelete() {
    this.deleteCount.emit(this.index);
  }
}

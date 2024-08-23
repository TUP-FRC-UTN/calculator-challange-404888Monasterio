import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-operation-button',
  standalone: true,
  imports: [],
  templateUrl: './operation-button.component.html',
  styleUrl: './operation-button.component.css'
})
export class OperationButtonComponent {
  @Input() operator: string = "";
  @Input() text: string = "";
  @Input() values: number[] = [];

  @Output() operationDone = new EventEmitter<number>();
  operate() {
    let operation = this.values.join(this.operator);
    this.operationDone.emit(eval(operation));
  }
}

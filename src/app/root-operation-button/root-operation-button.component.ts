import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root-operation-button',
  standalone: true,
  imports: [],
  templateUrl: './root-operation-button.component.html',
  styleUrl: './root-operation-button.component.css'
})
export class RootOperationButtonComponent {
  @Input() values: number[] = [];

  @Output() operationDone = new EventEmitter<number>();
  operate() {
    this.operationDone.emit(Math.pow(this.values[0], 1 / this.values[1]))
  }
}


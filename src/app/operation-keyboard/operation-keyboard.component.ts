import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OperationButtonComponent } from "../operation-button/operation-button.component";
import { RootOperationButtonComponent } from "../root-operation-button/root-operation-button.component";

@Component({
  selector: 'app-operation-keyboard',
  standalone: true,
  imports: [OperationButtonComponent, RootOperationButtonComponent],
  templateUrl: './operation-keyboard.component.html',
  styleUrl: './operation-keyboard.component.css'
})
export class OperationKeyboardComponent {
  @Input() values: number[] = [];  
  @Output() operationDone = new EventEmitter<number>();
  onOperationDone(result: number) {
    this.operationDone.emit(result);
  }
  onClearClicked(){
    this.operationDone.emit(0);
  }
}

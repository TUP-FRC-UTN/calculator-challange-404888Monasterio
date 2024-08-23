import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OperationButtonComponent } from "./operation-button/operation-button.component";
import { OperationKeyboardComponent } from "./operation-keyboard/operation-keyboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OperationButtonComponent, OperationKeyboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculator';
  result: number = 0;
  valueA: number = 0;
  valueB: number = 0;

  onValueAChanged(event: any){
    this.valueA = event.target.value;
  }
  onValueBChanged(event: any){
    this.valueB = event.target.value;
  }

  onOperationDone(result: number) {
    this.result = result;
  }
}

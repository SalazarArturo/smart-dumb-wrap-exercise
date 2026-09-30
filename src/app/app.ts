import { Component} from '@angular/core';
import { SmartComponent } from './components/smart-component/smart-component';
@Component({
  imports: [SmartComponent, SmartComponent],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected flagWrapper?: boolean;

  changeWrapperView() {
    if (!this.flagWrapper) {
      this.flagWrapper = true;
    } else {
      this.flagWrapper = false;
    }
  }
}

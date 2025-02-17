import { Component } from '@angular/core';
import { DataBindingComponent } from './shared/components/data-binding/data-binding.component';

@Component({
  selector: 'app-root',
  imports: [DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular19-Tutorial';
}

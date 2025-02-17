import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './features/admin/admin.component';
import { UserComponent } from './features/user/user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular19-Tutorial';
}

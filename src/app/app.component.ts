import { Component } from '@angular/core';
import { ChatComponent } from "./features/chat/pages/chat/chat.component";

@Component({
  imports: [ ChatComponent],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'geminiai';
}

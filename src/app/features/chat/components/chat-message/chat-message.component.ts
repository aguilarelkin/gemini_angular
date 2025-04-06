import { Component, Input } from '@angular/core';
import { Message } from '../../models/message.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-message',
  imports: [CommonModule],
  template: `
    <div [ngClass]="{
      'text-right': message.sender === 'user',
      'text-left': message.sender === 'ai'
    }">
      <div [ngClass]="{
        'bg-blue-600 text-white': message.sender === 'user',
        'bg-gray-700 text-white': message.sender === 'ai'
      }" class="inline-block px-4 py-2 m-1 rounded-xl max-w-xl">
        {{ message.text }}
      </div>
    </div>
  `,
  styleUrl: './chat-message.component.css'
})
export class ChatMessageComponent {
  @Input() message!: Message;
}

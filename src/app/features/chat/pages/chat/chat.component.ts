import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from '../../models/message.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatMessageComponent } from '../../components/chat-message/chat-message.component';
import { LoadingService } from '../../../../components/loading/loading.service';

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule, ChatMessageComponent,],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  message = '';
  messages$: Observable<Message[]>;
  siteKey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
  
  constructor(public chatService: ChatService, public loadingService: LoadingService) {
    this.messages$ = this.chatService.messages$;
  }

  send() {
    if (this.message.trim()) {
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }
}

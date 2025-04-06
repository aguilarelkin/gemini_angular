import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../models/message.model';
import { HttpClient } from '@angular/common/http';
import { TextResponse } from '../models/TextResponse';
import { TextRequest } from '../models/TextRequest';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messagesSubject = new BehaviorSubject<Message[]>([]);
  messages$ = this.messagesSubject.asObservable();
  private readonly API_URL = 'http://localhost:8080/api/gemini/generate';

  constructor(private http: HttpClient) { }
  sendMessage(prompt: string) {
    const req: TextRequest = { prompt };
    const userMessage: Message = { sender: 'user', text: prompt };
    this.addMessage(userMessage);
    this.http.post<TextResponse>(this.API_URL, req).subscribe(aiMessage => {
      this.addMessage({ sender: 'ai', text: aiMessage.response });
    });

  }

  addMessage(message: Message) {
    const current = this.messagesSubject.getValue();
    this.messagesSubject.next([...current, message]);
  }

  clearMessages() {
    this.messagesSubject.next([]);
  }
}

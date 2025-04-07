import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { Message } from '../models/message.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TextResponse } from '../models/TextResponse';
import { TextRequest } from '../models/TextRequest';
import { error } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messagesSubject = new BehaviorSubject<Message[]>([]);
  messages$ = this.messagesSubject.asObservable();
  private readonly API_URL = 'http://localhost:8080/api/gemini/generate';

  constructor(private http: HttpClient) { }
  sendMessage(prompt: string) {
    console.log(prompt)
    const req: TextRequest = { prompt };
    const userMessage: Message = { sender: 'user', text: prompt };
    this.addMessage(userMessage);
    this.http.post<TextResponse>(this.API_URL, { prompt}).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMessage: Message = {
          sender: 'ai',
          text: '😔 ¡Ups! Algo salió mal. Intenta nuevamente más tarde.'
        };
        this.addMessage(errorMessage);
        console.error('Error al consultar el backend:', error);
        return of();
      })
    ).subscribe(aiMessage => {

      this.addMessage({ sender: 'ai', text: aiMessage.response });
    });

  }

  addMessage(message: Message) {
    console.log(message)
    const current = this.messagesSubject.getValue();
    this.messagesSubject.next([...current, message]);
  }

  clearMessages() {
    this.messagesSubject.next([]);
  }
}

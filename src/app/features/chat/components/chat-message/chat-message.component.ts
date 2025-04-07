import { Component, ElementRef, Input } from '@angular/core';
import { Message } from '../../models/message.model';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-chat-message',
  imports: [CommonModule],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.css'
})
export class ChatMessageComponent {
  @Input() message!: Message;
  constructor(private elRef: ElementRef,   private sanitizer: DomSanitizer){

  }
  formatMessage(text: string): SafeHtml {
    if (!text) return '';
    
    text = text.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
      const safeLang = lang || 'plaintext';
      const escapedCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return `<pre class="language-${safeLang}"><code class="language-${safeLang}">${escapedCode}</code></pre>`;
    });
    
    text = text.replace(/`([^`\n]+?)`/g, '<code>$1</code>');
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    text = text.replace(/(^|\n)[*-] (.*?)(?=\n|$)/g, '$1<li>$2</li>');
    text = text.replace(/\n/g, '<br>');

    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
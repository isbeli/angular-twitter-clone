import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private message: string[] =[]

  constructor() { }

  addMessage(message: string){
    this.message.push(message)
  }

  getMessage(){
    return this.message
  }

  clearMessage(){
    this.message = []
  }
}

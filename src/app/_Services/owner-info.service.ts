import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnerInfoService {

  constructor() { }

  getMailingInfo(){
    let mail = {
      recipientAddress: 'gerni.visser@gmail.com',
      subject: 'Communication from Protfolio',
      body: 'Good day Mr.Visser',
    }

    return mail;
  }
}

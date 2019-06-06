import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
 userId = new Subject<any>();
  constructor() { }

  getId(id) {
    this.userId.next(id);
  }
}

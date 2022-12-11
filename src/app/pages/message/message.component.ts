import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})
export class MessageComponent {

  constructor(private router: Router){}
  


  
  onBackClick() {
    
    this.router.navigate(['']);
    
  }
}

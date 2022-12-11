import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent {

  constructor(private router: Router){}
  
  onBackClick() {
    
    this.router.navigate(['']);
    
  }
}

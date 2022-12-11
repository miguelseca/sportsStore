import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styles: [
  ]
})
export class BannerComponent {

  constructor(private router: Router){}
  


  
  onMessageClick() {
    
    this.router.navigate(['/message']);
    
  }


}

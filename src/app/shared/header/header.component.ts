import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, EMPTY, Subject, takeUntil } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  cartCount: string = '';
  endSubs$: Subject<any> = new Subject();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$
      .pipe(takeUntil(this.endSubs$))
      .subscribe((cart) => (this.cartCount = cart?.items.length.toString()));
  }

  ngOnDestroy(): void {
    this.endSubs$.complete();
  }
}

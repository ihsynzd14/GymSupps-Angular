import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { SuppService } from '../services/supplements/supp.service';
import { Supp } from '../shared/models/Supp';

@Component({
  selector: 'app-supp-page',
  templateUrl: './supp-page.component.html',
  styleUrls: ['./supp-page.component.css']
})

export class SuppPageComponent implements OnInit {

  supp!: Supp;
  constructor(private activatedRoute:ActivatedRoute,
    private suppService: SuppService,
    private cartService: CartService,
    private router: Router) { 
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.supp = suppService.getSuppById(params['id']);
    })

  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.supp);
    this.router.navigateByUrl('/cart-page');
  }
}

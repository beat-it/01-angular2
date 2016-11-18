import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
@Injectable()
export class NotFoundComponent implements OnInit {
  // inštanciu Router-a nám dodá Angular pri konštrukcii vďaka dekorátoru
  // @Injectable. Router máme preto, že v deklarácii modulu sme pridali
  // RouterModule
  constructor( private router: Router) { }

  ngOnInit() {
  }

  get currentRoute() {
    return this.router.routerState.snapshot.url;
  }

}

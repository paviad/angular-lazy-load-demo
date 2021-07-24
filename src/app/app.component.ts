import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazy';

  constructor(private router: Router) { }
  
  async lazyLoad() {
    const routes: Routes = [
      { path: '', loadChildren: () => import('./lazy-two/lazy-two.module').then(m => m.LazyTwoModule) }
    ];

    this.router.resetConfig(routes);
    this.router.navigateByUrl('/home');
  }
}

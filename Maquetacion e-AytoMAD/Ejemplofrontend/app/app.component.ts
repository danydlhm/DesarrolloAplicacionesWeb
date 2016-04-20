import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BookListComponent} from './book-list.component';
import {BookDetailComponent} from './book-detail.component';
import {BookFormComponent} from './book-form.component';
import {BookService} from './book.service';

@Component({
  selector: 'app',
  template: `
    <h1 class="title">Library</h1>
    <router-outlet></router-outlet>
  `,
  providers:  [BookService],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/books', name: 'Books', component: BookListComponent, useAsDefault: true},
  {path: '/book/:id', name: 'BookDetail', component: BookDetailComponent},
  {path: '/book/new', name: 'BookNew', component: BookFormComponent},
  {path: '/book/edit/:id', name: 'BookEdit', component: BookFormComponent}
])
export class AppComponent { }

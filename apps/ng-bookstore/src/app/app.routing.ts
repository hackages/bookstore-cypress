import { AuthGuard } from './services';
import { BookResolver } from './services/book.resolver';
import { Routes } from '@angular/router';
import {
  BookDetailComponent,
  DashboardComponent,
  LoginComponent,
} from './components';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'books/:id',
    component: BookDetailComponent,
    resolve: {
      book: BookResolver,
    },
    canActivate: [AuthGuard],
  },
];

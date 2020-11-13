import { routes } from './app.routing';
import { InMemoryDataService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  SearchComponentComponent,
  LoginComponent,
  BooksComponent,
  HeaderComponent,
  DashboardComponent,
  BookDetailComponent,
} from './components';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    DashboardComponent,
    BooksComponent,
    HeaderComponent,
    BookDetailComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(routes, { enableTracing: false }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

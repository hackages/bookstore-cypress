import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Book } from '../../../types';

@Component({
  selector: 'bs-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  @Input() items: Book[];
}

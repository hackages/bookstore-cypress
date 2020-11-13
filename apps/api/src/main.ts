import * as express from 'express';
import { Response, Request } from 'express';
import { books } from './mocks/books';
import * as cors from 'cors';

const app = express();

app.use(cors());

app.get('/books', (req: Request, res: Response) => {
  res.send({ books });
});

app.get('/books/:bookId', (req: Request, res: Response) => {
  const { bookId } = req.params;
  const book = books.find((book) => book.id === parseInt(bookId));
  res.send({ book });
});

app.get('/search', (req: Request, res: Response) => {
  const searchTerm = req.query.title as string;
  const foundBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send({ books: foundBooks });
});

app.post('/auth', (req: Request, res: Response) => {
  res.send({ auth: true });
});

app.listen(5000, () => {
  console.log('app is running on port 5000');
});

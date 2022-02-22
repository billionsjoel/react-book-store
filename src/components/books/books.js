import { useSelector } from 'react-redux';
import Panel from './panel';
import Form from './form';

function books() {
  const allBooks = useSelector(({ booksReducer }) => booksReducer);
  return (
    <div className="books">
      {allBooks.map((book) => (
        <Panel
          key={book.id}
          id={book.id}
          title={book.title}
          category={book.category}
        />
      ))}
      <Form />
    </div>
  );
}

export default books;

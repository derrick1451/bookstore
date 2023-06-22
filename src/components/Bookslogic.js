import FormInput from './FormInput';

function BooksLogic() {
  const books = [
    {
      id: 1,
      category: 'Action',
      title: 'The Hunger Games',
      Author: 'Suzzane Collins',
    },
    {
      id: 2,
      category: 'Science Fiction',
      title: 'Dune',
      Author: 'Frank Herbert',
    },
    {
      id: 3,
      category: 'Economy',
      title: 'Capital In The Twenty First Century',
      Author: 'Suzzane Collins',
    },
  ];
  return (
    <div className="container">
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <p>{book.category}</p>
            <h2>{book.title}</h2>
            <span>{book.Author}</span>
            <button type="button">Delete</button>
          </li>
        ))}
      </ul>
      <FormInput />
    </div>
  );
}
export default BooksLogic;

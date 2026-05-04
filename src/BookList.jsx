export default function BookList({ books, onDelete, onEdit }) {
  return (
    <div>
      <h2>Library Books</h2>

      {books.length === 0 && <p>No books added yet.</p>}

      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>Title:</strong> {book.title} <br />
            <strong>Author:</strong> {book.author} <br />
            <strong>Summary:</strong> {book.summary}
            <br />

            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
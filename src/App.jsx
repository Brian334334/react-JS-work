import { useState } from "react";
import BookList from "./BookList";
import "./App.css";

export default function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [books, setBooks] = useState([]);

  const [message, setMessage] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddBook = () => {
    if (!title || !author || !summary) {
      setMessage("⚠️⚠️Please fill all fields");
      return;
    }

    const newBook = { title, author, summary };

    // If editing → update book
    if (editingIndex !== null) {
      const updatedBooks = [...books];
      updatedBooks[editingIndex] = newBook;
      setBooks(updatedBooks);

      setEditingIndex(null);
      setMessage("Book updated!");
    } 
    // If adding → add a new book
    else {
      setBooks([...books, newBook]);
      setMessage("Book added successfully!");
    }

    // Clear input fields
    setTitle("");
    setAuthor("");
    setSummary("");
  };

  const handleDelete = (index) => {
    const newList = books.filter((_, i) => i !== index);
    setBooks(newList);
  };

  const handleEdit = (index) => {
    const book = books[index];

    setTitle(book.title);
    setAuthor(book.author);
    setSummary(book.summary);

    setEditingIndex(index);
    setMessage("Editing book…");
  };

  return (
    <div className="app-container">
      <h2>{editingIndex !== null ? "Edit Book" : "Add a Book"}</h2>

      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <textarea
        placeholder="Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />

      <button onClick={handleAddBook}>
        {editingIndex !== null ? "Save Changes" : "Add Book"}
      </button>

      {message && <p className="feedback">{message}</p>}

      <hr />

      <BookList books={books} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}
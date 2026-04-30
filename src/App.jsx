import { useState } from "react";
import BookList from "./BookList";
import "./App.css";

export default function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");

  const [books, setBooks] = useState([]);

  const handleAddBook = () => {
    if (!title || !author || !summary) return;

    const newBook = { title, author, summary };
    setBooks([...books, newBook]);

    // Clear inputs
    setTitle("");
    setAuthor("");
    setSummary("");
  };

  return (
    <div className="app-container">
      <h2>Add a Book</h2>

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

      <button onClick={handleAddBook}>Add Book</button>

      <hr />

      <BookList books={books} />
    </div>
  );
}
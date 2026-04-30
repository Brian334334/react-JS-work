import { useState } from "react";
import BookList from "./BookList";
import "./App.css";

export default function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState(""); // <-- new state

  const handleAddBook = () => {
    if (!title || !author || !summary) {
      setMessage("⚠️ Please fill in all fields");
      return;
    }

    const newBook = { title, author, summary };
    setBooks([...books, newBook]);

    // clear inputs and message
    setTitle("");
    setAuthor("");
    setSummary("");
    setMessage("✅ Book added successfully!");
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

      {/* Feedback message */}
      {message && <p className="feedback">{message}</p>}

      <hr />

      <BookList books={books} />
    </div>
  );
}

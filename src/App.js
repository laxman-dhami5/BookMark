// App.js
import React, { useState, useEffect } from 'react';
import AddUrlForm from './components/AddUrlForm';
import BookmarkList from './components/BookmarkList';

// Function to generate a unique ID
const generateId = () => {
  return Math.random();
};

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    if (storedBookmarks) {
      setBookmarks(storedBookmarks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const handleAddBookmark = (newBookmark) => {
    newBookmark.id = generateId(); // Add unique ID to the new bookmark
    setBookmarks(prevBookmarks => [...prevBookmarks, newBookmark]);
  };

  const handleDeleteBookmark = (id) => {
    setBookmarks(prevBookmarks => prevBookmarks.filter(bookmark => bookmark.id !== id));
  };

  const handleEditBookmark = (updatedBookmark) => {
    setBookmarks(prevBookmarks =>
      prevBookmarks.map(bookmark => (bookmark.id === updatedBookmark.id ? updatedBookmark : bookmark))
    );
  };

  return (
    <div>
      
      <AddUrlForm onAdd={handleAddBookmark} />
      <BookmarkList bookmarks={bookmarks} onDelete={handleDeleteBookmark} onEdit={handleEditBookmark} />
    </div>
  );
}

export default App;

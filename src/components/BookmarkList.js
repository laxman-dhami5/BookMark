// BookmarkList.js
import React from 'react';

function BookmarkList({ bookmarks, onDelete, onEdit }) {
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div>
      <h2>All Bookmarks</h2>
      {bookmarks.map(bookmark => (
        <BookmarkItem
          key={bookmark.id}
          bookmark={bookmark}
          onDelete={handleDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

function BookmarkItem({ bookmark, onDelete, onEdit }) {
  const handleDelete = () => {
    onDelete(bookmark.id);
  };

  const handleEdit = () => {
    onEdit(bookmark.id);
  };

  return (
    <div key={bookmark.id}>
      <span>{bookmark.title} -&gt; </span>
      <a href={bookmark.url} target="_blank" rel="noopener noreferrer">{bookmark.url}</a>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default BookmarkList;

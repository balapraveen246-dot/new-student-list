import React from "react";
import StudentItem from "./StudentItem.jsx";

export default function FavouriteStudents({ favourites, onRemove }) {
  if (favourites.length === 0) {
    return <p className="empty-message">No favourite students yet.</p>;
  }

  return (
    <div>
      {favourites.map((name, i) => (
        <StudentItem
          key={name}
          index={i + 1}
          name={name}
          buttonLabel="Remove"
          buttonClass="remove"
          onClick={() => onRemove(name)}
        />
      ))}
    </div>
  );
}

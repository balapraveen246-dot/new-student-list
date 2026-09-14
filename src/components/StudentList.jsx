import React from "react";
import StudentItem from "./StudentItem.jsx";

// The full roster. This list is fixed — students are never removed from
// it. Only the button state on each row changes when favourited.
const ALL_STUDENTS = ["Bharath", "Praveen", "Kumar", "Ramya", "Monica"];

export default function StudentList({ favourites, onAddFavourite }) {
  return (
    <div>
      {ALL_STUDENTS.map((name, i) => {
        const isFavourite = favourites.includes(name);
        return (
          <StudentItem
            key={name}
            index={i + 1}
            name={name}
            buttonLabel={isFavourite ? "Added to Favourite" : "Add to Favourite"}
            buttonClass={isFavourite ? "added" : "add"}
            onClick={() => onAddFavourite(name)}
          />
        );
      })}
    </div>
  );
}

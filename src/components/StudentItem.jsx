import React from "react";

// Generic row used by both the Student List and Favourite Students tabs.
// Only the label/color of the button differs between the two contexts.
export default function StudentItem({ index, name, buttonLabel, buttonClass, onClick }) {
  return (
    <div className="student-row">
      <span className="student-name">
        {index}. {name}
      </span>
      <button className={`action-btn ${buttonClass}`} onClick={onClick}>
        {buttonLabel}
      </button>
    </div>
  );
}

import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import StudentList from "./components/StudentList.jsx";
import FavouriteStudents from "./components/FavouriteStudents.jsx";

export default function App() {
  const [favourites, setFavourites] = useState([]);
  const [activeTab, setActiveTab] = useState("list");

  // Idempotent add: clicking an already-favourited student's button again
  // can never create a duplicate entry.
  const addToFavourite = (name) => {
    setFavourites((prev) => (prev.includes(name) ? prev : [...prev, name]));
  };

  const removeFromFavourite = (name) => {
    setFavourites((prev) => prev.filter((s) => s !== name));
  };

  return (
    <div className="app-card">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content-area">
        {activeTab === "list" ? (
          <StudentList favourites={favourites} onAddFavourite={addToFavourite} />
        ) : (
          <FavouriteStudents favourites={favourites} onRemove={removeFromFavourite} />
        )}
      </div>
    </div>
  );
}

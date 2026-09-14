import React from "react";

export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = [
    { key: "list", label: "List of Students" },
    { key: "favourites", label: "Favourite Students" },
  ];

  return (
    <div className="navbar">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`nav-tab ${activeTab === tab.key ? "active" : ""}`}
          onClick={() => setActiveTab(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

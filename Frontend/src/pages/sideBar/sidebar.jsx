import React from "react";
import "./style.css"; // Import CSS for styling

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div style={{ paddingTop: "520px" }}>
      <div className={isOpen ? "sidebar open" : "sidebar"}>
        <span className="corner-text"><b>Overview</b></span>
      </div>
    </div>
  );
};

export default Sidebar;

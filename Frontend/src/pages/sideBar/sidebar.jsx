// import React from "react";
// import "./style.css"; // Import CSS for styling
// import { dashboardConfig } from "../Category/sidebarMenu";
// import DashboardNav from "../Category/dashboardNav";

// const Sidebar = ({ isOpen, toggle }) => {
//   let sidebarComponent = <DashboardNav items={dashboardConfig.sideBarNav} />;
//   return (
//     <div style={{ paddingTop: "520px" }}>
//       <div className={isOpen ? "sidebar open" : "sidebar"}>
//         <span className="corner-text">
//           <b>Overview</b>
//         </span>
//       </div>
//       {sidebarComponent}
//     </div>
//   );
// };

// export default Sidebar;

// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { dashboardConfig } from "../Category/sidebarMenu";
import "./style.css"; // Import CSS for styling

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <nav>
        <span >
          <b className="sidebar_b">Overview</b>
        </span>
        <ul>
          {dashboardConfig.sideBarNav.map((item, index) => (
            <div className="sidebar_h4" key={index}>
              <Link to={`/dashboard/${item.href}`} style={{ marginBottom: '10px', color: 'black', textDecoration: 'none' }}>{item.title}</Link>
            </div>
          ))}
        </ul>

      </nav>
    </div>
  );
};

export default Sidebar;

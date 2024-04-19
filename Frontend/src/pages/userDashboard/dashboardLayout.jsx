// import React, { useState } from "react";
// import Header from "../headerFoder/header";
// import Footer from "../footerFolder/footer";
// import { Outlet } from "react-router-dom";
// import Sidebar from "../sideBar/sidebar";

// const DashboardLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen)
//   };

//   return (
//     <div>
//       <Header toggleSidebar={toggleSidebar} />
//       <div style={{ display: "flex" }}>
//         <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
//         <main style={{ paddingTop: "35px", flex: 1 }}>
//           <Outlet />
//         </main>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default DashboardLayout;

// DashboardLayout.js
// import React, { useState } from "react";
// import Header from "../headerFoder/header";
// import Footer from "../footerFolder/footer";
// import { Outlet } from "react-router-dom";
// import Sidebar from "../sideBar/sidebar";

// const DashboardLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div>
//       <Header />
//       <div style={{ display: "flex" }}>
//         <Sidebar
//           isOpen={isSidebarOpen}
//           toggle={toggleSidebar}
//           headerHeight={35}
//         />
//         <main style={{ paddingTop: "35px", flex: 1 }}>
//           <Outlet />
//         </main>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default DashboardLayout;

// DashboardLayout.js
import React, { useState } from "react";
import Header from "../headerFoder/header";
import Footer from "../footerFolder/footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../sideBar/sidebar";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const headerHeight = 35; // Define the height of the header
  const footerHeight = 50; // Define the height of the footer

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <Header toggleSidebar={toggleSidebar} />
      <div style={{ display: "flex" }}>
        <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
        <main style={{ paddingTop: `${headerHeight}px`, paddingBottom: `${footerHeight}px`, flex: 1 }}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;

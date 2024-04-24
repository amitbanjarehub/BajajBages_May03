// import React from "react";

// const Header = ({ toggleSidebar }) => {
//   return (
//     <div>
//       <button onClick={toggleSidebar} style={{color: "white", backgroundColor: "yellow"}}>
//         sidebarButton
//       </button>

//       <header
//         style={{
//           backgroundColor: "black",
//           color: "white",
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           margin: 0,
//           padding: 0,
//           height: "35px",
//         }}
//       >
//         header
//       </header>
//     </div>
//   );
// };

// export default Header;

import React from "react";

const Header = ({ toggleSidebar }) => {
  const logOut = () => {
    location.replace("/");
  };
  return (
    <header
      style={{
        backgroundColor: "black",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        margin: 0,
        padding: 0,
        height: "35px",
        display: "flex",
        justifyContent: "space-between", // Adjusted justify-content
        alignItems: "center",
      }}
    >
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "24px",
          height: "24px",
          stroke: "currentColor",
          strokeWidth: "2px",
          color: "white",
          marginLeft: "10px",
        }}
        onClick={toggleSidebar}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div>
        <button onClick={logOut} style={{marginRight: "10px", borderRadius: "10px", width: "100px", height: "30px", backgroundColor: "red", color: "white"}}>logout</button>
        
      </div>
    </header>
  );
};

export default Header;

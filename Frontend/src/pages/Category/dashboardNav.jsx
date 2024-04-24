// import React from "react";
// import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { cn } from "../../components/lib/utils";

// const DashboardNav = ({ items, closeSheet }) => {
//   const location = useLocation();
//   if (!items?.length) {
//     return null;
//   }

//   const pathnameTail = location.pathname.split("/").pop();

//   return (
//     <nav className="grid item-start gap-2">
//       {items.map((item, index) => {
//         return (
//           item.href && (
//             <Link
//               key={index}
//               to={`/dashboard/${item.href}`}
//               onClick={() => closeSheet?.()}
//               style={{
//                 // Apply inline styles directly here
//                 display: "inline-block",
//                 textDecoration: "none",
//                 cursor: item.disabled ? "not-allowed" : "pointer",
//                 opacity: item.disabled ? "0.8" : "1",
//                 padding: "8px 12px",
//                 fontSize: "14px",
//                 fontWeight: "500",
//                 borderRadius: "4px",
//                 backgroundColor:
//                   pathnameTail === item.href ? "#4B5563" : "transparent",
//                 color: pathnameTail === item.href ? "#FFFFFF" : "#000000",
//                 transition: "background-color 0.3s, color 0.3s",
//               }}
//             >
//               <span>
//                 {item.icon({
//                   size: 18,
//                   className: "mr-2",
//                 })}
//                 <span>{item.title}</span>
//               </span>
//             </Link>
//           )
//         );
//       })}
//     </nav>
//   );
// };

// export default DashboardNav;

// dashboardNav.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const DashboardNav = ({ items, closeSheet }) => {
  const location = useLocation();
  const pathnameTail = location.pathname.split("/").pop();

  return (
    <nav className="grid item-start gap-2">
      {items.map((item, index) => (
        <Link
          key={index}
          to={`/dashboard/${item.href}`}
          onClick={() => closeSheet?.()}
          style={{
            display: "inline-block",
            textDecoration: "none",
            cursor: item.disabled ? "not-allowed" : "pointer",
            opacity: item.disabled ? "0.8" : "1",
            padding: "8px 12px",
            fontSize: "14px",
            fontWeight: "500",
            borderRadius: "4px",
            backgroundColor:
              pathnameTail === item.href ? "#4B5563" : "transparent",
            color: pathnameTail === item.href ? "#FFFFFF" : "#000000",
            transition: "background-color 0.3s, color 0.3s",
          }}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default DashboardNav;

// import React from 'react'
// import Header from '../headerFoder/header'
// import Footer from '../footerFolder/footer'

// const Layout = ({ children }) => {
//   return (
//     <div>
//         <Header />
//         <main>{children}</main>
//         <Footer />
//     </div>
//   )
// }

// export default Layout

import React from "react";
import Header from "../headerFoder/header";
import Footer from "../footerFolder/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

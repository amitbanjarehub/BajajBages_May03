// import React from "react";
// import "./style.css";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const newsData = [

//   {
//     name: "Deshdoot",
//     image:
//       "https://images.assettype.com/deshdoot/2020-06/39619422-5b4d-4eab-be53-1879987554fe/Deshdoot_Header_Logo.png",
//     href: "https://www.deshdoot.com/",
//   },
//   {
//     name: "Dainiktribuneonline",
//     image:
//       "https://www.dainiktribuneonline.com/wp-content/uploads/2023/08/DT-Web-Logo.png",
//     href: "https://www.dainiktribuneonline.com/",
//   },

// ];

// const GridContainer = styled.div`
//   @media screen and (max-width: 768px) {
//     display: grid;
//     grid-template-columns: repeat(
//       2,
//       minmax(0, 1fr)
//     ); /* 2 items per row on small screens */
//     gap: 1rem;
//   }

//   @media screen and (min-width: 769px) {
//     display: grid;
//     grid-template-columns: repeat(
//       4,
//       minmax(0, 1fr)
//     ); /* 4 items per row on larger screens */
//     gap: 1rem;
//   }
// `;

// const Home = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <h1 className="h1">Bajaj Bages</h1>
//       <div>
//         <button className="login_button" onClick={() => navigate("/login")}>
//           Login
//         </button>
//       </div>
//       {/* <div className="grid gap-4 grid-cols-2 md:grid-cols-4  ">
//         {newsData.map((news, index) => (
//           <Link
//             className="bg-secondary-foreground/15 p-10  rounded-2xl w-full flex justify-center items-center h-40"
//             target="_blank"
//             to={news.href}
//           >
//             <img
//               src={news.image}
//               alt={news.name}
//               className="mix-blend-darken"
//             ></img>
//           </Link>
//         ))}
//       </div> */}

//     </div>
//   );
// };

// export default Home;

//-------------------------------------------------2nd-----------------------------------
// import React from "react";
// import "./style.css";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const newsData = [
//   {
//     name: "Deshdoot",

//     href: "https://www.deshdoot.com/",
//   },
//   {
//     name: "Dainiktribuneonline",

//     href: "https://www.dainiktribuneonline.com/",
//   },
//   {
//     name: "Deshdoot",

//     href: "https://www.deshdoot.com/",
//   },
//   {
//     name: "Dainiktribuneonline",

//     href: "https://www.dainiktribuneonline.com/",
//   },
//   {
//     name: "Deshdoot",

//     href: "https://www.deshdoot.com/",
//   },
//   {
//     name: "Dainiktribuneonline",

//     href: "https://www.dainiktribuneonline.com/",
//   },
//   {
//     name: "Deshdoot",

//     href: "https://www.deshdoot.com/",
//   },
//   {
//     name: "Dainiktribuneonline",

//     href: "https://www.dainiktribuneonline.com/",
//   },
//   {
//     name: "Deshdoot",

//     href: "https://www.deshdoot.com/",
//   },
//   {
//     name: "Dainiktribuneonline",

//     href: "https://www.dainiktribuneonline.com/",
//   },
//   {
//     name: "Deshdoot",

//     href: "https://www.deshdoot.com/",
//   },
//   {
//     name: "Dainiktribuneonline",

//     href: "https://www.dainiktribuneonline.com/",
//   },
//   {
//     name: "Deshdoot",

//     href: "https://www.deshdoot.com/",
//   },
//   {
//     name: "Dainiktribuneonline",

//     href: "https://www.dainiktribuneonline.com/",
//   },
// ];

// const GridContainer = styled.div`
//   @media screen and (max-width: 768px) {
//     display: grid;
//     grid-template-columns: repeat(
//       2,
//       minmax(0, 1fr)
//     ); /* 2 items per row on small screens */
//     gap: 1rem;
//   }

//   @media screen and (min-width: 769px) {
//     display: grid;
//     grid-template-columns: repeat(
//       4,
//       minmax(0, 1fr)
//     ); /* 4 items per row on larger screens */
//     gap: 1rem;
//   }
// `;

// const Card = styled.div`
//   background-color: #f4f4f4;
//   padding: 1rem;
//   border-radius: 8px;
// `;

// const Home = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <h1 className="h1">Bajaj Bages</h1>
//       <div>
//         <button className="login_button" onClick={() => navigate("/login")}>
//           Login
//         </button>
//       </div>
//       <GridContainer>
//         {newsData.map((news, index) => (
//           <Link
//             className="bg-secondary-foreground/15 p-10  rounded-2xl w-full flex justify-center items-center h-40"
//             target="_blank"
//             to={news.href}
//           >
//             <Card>
//               <img
//                 src={news.image}
//                 alt={news.name}
//                 className="mix-blend-darken"
//               ></img>
//             </Card>
//           </Link>
//         ))}
//       </GridContainer>
//     </div>
//   );
// };

// export default Home;

//================================================3rd its scrolling continuously======================================================

// import React, { useRef, useEffect } from "react";
// import "./style.css";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const newsData = [
//   {
//     name: "Card1",
//     href: "https://www.deshdoot.com/",
//   },
//   {
//     name: "Card2",
//     href: "https://www.dainiktribuneonline.com/",
//   },
//   {
//     name: "Card3",
//     href: "https://www.deshdoot.com/",
//   },
//   {
//     name: "Card4",
//     href: "https://www.dainiktribuneonline.com/",
//   },
//   {
//     name: "Card5",
//     href: "https://www.deshdoot.com/",
//   },
//   {
//     name: "Card6",
//     href: "https://www.dainiktribuneonline.com/",
//   },
//   {
//     name: "Card7",
//     href: "https://www.deshdoot.com/",
//   },
//   {
//     name: "Card8",
//     href: "https://www.dainiktribuneonline.com/",
//   },
//   {
//     name: "Card9",
//     href: "https://www.deshdoot.com/",
//   },
//   {
//     name: "Card10",
//     href: "https://www.dainiktribuneonline.com/",
//   },
//   // Add more data as needed...
// ];

// const Card = styled.div`
//   background-color: #f4f4f4;
//   padding: 1rem;
//   border-radius: 8px;
//   width: 200px; /* Fixed width for each card */
//   margin-right: 1rem; /* Margin between cards */
// `;

// const Home = () => {
//   const navigate = useNavigate();
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;

//     const scrollInterval = setInterval(() => {
//       if (container) {
//         container.scrollLeft += 4; // Adjust scroll speed here
//         if (container.scrollLeft >= container.scrollWidth / 2) {
//           container.scrollLeft = 0;
//         }
//       }
//     }, 30); // Adjust scrolling interval here (milliseconds)

//     return () => clearInterval(scrollInterval);
//   }, []);

//   return (
//     <div>
//       <h1 className="h1">Demo</h1>
//       <div style={{ marginBottom: "100px" }}>
//         <button className="login_button" onClick={() => navigate("/login")}>
//           Login
//         </button>
//       </div>
//       <div
//         ref={containerRef}
//         style={{
//           overflowX: "hidden",
//           whiteSpace: "nowrap",
//           width: "100%",
//           WebkitOverflowScrolling: "touch",
//         }}
//       >
//         {/* Container for horizontal scrolling */}
//         <div className="scrolling_card_div" style={{ display: "flex" }}>
//           {/* Flex container for cards */}
//           {newsData.map((news, index) => (
//             <Link
//               key={index}
//               className="bg-secondary-foreground/15 p-10 rounded-2xl w-full flex justify-center items-center h-250 scrolling_card_div_link"
//               target="_blank"
//               to={news.href}
//               style={{ marginRight: "1rem" }}
//             >
//               <Card>
//                 {/* Content of each card */}
//                 {news.name}
//               </Card>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// ==========================================4th====================================================================================

// import React, { useRef, useEffect } from "react";
// import "./style.css";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const newsData = [
//   {
//     name: "Card1",
//     href: "https://www.deshdoot.com/",
//   },
//   {
//     name: "Card2",
//     href: "https://www.dainiktribuneonline.com/",
//   },
//   {
//     name: "Card3",
//     href: "https://www.deshdoot.com/",
//   },
//   {
//     name: "Card4",
//     href: "https://www.dainiktribuneonline.com/",
//   },
//   {
//     name: "Card5",
//     href: "https://www.deshdoot.com/",
//   },
//   {
//     name: "Card6",
//     href: "https://www.dainiktribuneonline.com/",
//   },
//   {
//     name: "Card7",
//     href: "https://www.deshdoot.com/",
//   },
//   {
//     name: "Card8",
//     href: "https://www.dainiktribuneonline.com/",
//   },
//   {
//     name: "Card9",
//     href: "https://www.deshdoot.com/",
//   },
//   {
//     name: "Card10",
//     href: "https://www.dainiktribuneonline.com/",
//   },
//   // Add more data as needed...
// ];

// const Card = styled.div`
//   background-color: #f4f4f4;
//   padding: 1rem;
//   border-radius: 8px;
//   width: 200px; /* Fixed width for each card */
//   margin-right: 1rem; /* Margin between cards */
// `;

// // ... your data and styles

// const Home = () => {
//   const navigate = useNavigate();
//   const containerRef = useRef(null);
//   const scrollIntervalRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;

//     const scrollInterval = setInterval(() => {
//       if (container) {
//         container.scrollLeft += 4; // Adjust scroll speed here
//         if (container.scrollLeft >= container.scrollWidth / 2) {
//           container.scrollLeft = 0;
//         }
//       }
//     }, 30); // Adjust scrolling interval here (milliseconds)

//     scrollIntervalRef.current = scrollInterval;

//     return () => clearInterval(scrollInterval);
//   }, []);

//   const handleCardClick = () => {
//     clearInterval(scrollIntervalRef.current);
//     // console.log("click time")
//   };

//   return (
//     <div>
//       <h1 className="h1">Demo</h1>
//       <div style={{ marginBottom: "100px" }}>
//         <button className="login_button" onClick={() => navigate("/login")}>
//           Login
//         </button>
//       </div>
//       <div
//         ref={containerRef}
//         style={{
//           overflowX: "hidden",
//           whiteSpace: "nowrap",
//           width: "100%",
//           WebkitOverflowScrolling: "touch",
//         }}
//       >
//         {/* Container for horizontal scrolling */}
//         <div
//           className="scrolling_card_div"
//           style={{ display: "flex" }}
//           onClick={handleCardClick} // Add this line
//         >
//           {/* Flex container for cards */}
//           {newsData.map((news, index) => (
//             <Link
//               key={index}
//               className="bg-secondary-foreground/15 p-10 rounded-2xl w-full flex justify-center items-center h-250 scrolling_card_div_link"
//               target="_blank"
//               to={news.href}
//               style={{ marginRight: "1rem" }}
//             >
//               <Card>
//                 {/* Content of each card */}
//                 {news.name}
//               </Card>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useRef, useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const newsData = [
  {
    name: "Card1",
    href: "https://www.deshdoot.com/",
  },
  {
    name: "Card2",
    href: "https://www.dainiktribuneonline.com/",
  },
  {
    name: "Card3",
    href: "https://www.deshdoot.com/",
  },
  {
    name: "Card4",
    href: "https://www.dainiktribuneonline.com/",
  },
  {
    name: "Card5",
    href: "https://www.deshdoot.com/",
  },
  {
    name: "Card6",
    href: "https://www.dainiktribuneonline.com/",
  },
  {
    name: "Card7",
    href: "https://www.deshdoot.com/",
  },
  {
    name: "Card8",
    href: "https://www.dainiktribuneonline.com/",
  },
  {
    name: "Card9",
    href: "https://www.deshdoot.com/",
  },
  {
    name: "Card10",
    href: "https://www.dainiktribuneonline.com/",
  },
  // Add more data as needed...
];

const Card = styled.div`
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 8px;
  width: 200px; /* Fixed width for each card */
  margin-right: 1rem; /* Margin between cards */
`;

const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const [scrolling, setScrolling] = useState(true);

  useEffect(() => {
    const container = containerRef.current;

    const scrollInterval = setInterval(() => {
      if (container && scrolling) {
        container.scrollLeft += 4; // Adjust scroll speed here
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
    }, 30); // Adjust scrolling interval here (milliseconds)

    scrollIntervalRef.current = scrollInterval;

    return () => clearInterval(scrollInterval);
  }, [scrolling]);

  const handleCardClick = () => {
    clearInterval(scrollIntervalRef.current);
    setScrolling(false);
  };

  return (
    <div>
      <h1 className="h1">Demo</h1>
      <div style={{ marginBottom: "100px" }}>
        <button className="login_button" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
      <div
        ref={containerRef}
        className={scrolling ? "scrolling_card_div" : ""}
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          width: "100%",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Container for horizontal scrolling */}
        <div style={{ display: "flex" }} onClick={handleCardClick}>
          {/* Flex container for cards */}
          {newsData.map((news, index) => (
            <Link
              key={index}
              className="bg-secondary-foreground/15 p-10 rounded-2xl w-full flex justify-center items-center h-250 scrolling_card_div_link"
              target="_blank"
              to={news.href}
              style={{ marginRight: "1rem" }}
            >
              <Card>
                {/* Content of each card */}
                {news.name}
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// // import { Outlet } from "react-router-dom";
// import Nav from "./Nav";
// import Footer from "./Footer";

// // Main layout component that provides the basic page structure
// const Main = ({ children }) => {
//   return (
//     <div>
//       <Nav />
//       <main> {children} </main>
//       <Footer />
//     </div>
//   );
// };

// export default Main;

// import Nav from "./Nav";
// import Footer from "./Footer";

// export default function Main({ children }) {
//   return (
//     <>
//       <Nav />
//       <main>{children}</main>
//       <Footer />
//     </>
//   );
// }

import React from "react";

const Main = () => {
  return (
    <div className="main">
      <h1>This is main section</h1>
      <h2>React</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.
      </p>
    </div>
  );
};

export default Main;

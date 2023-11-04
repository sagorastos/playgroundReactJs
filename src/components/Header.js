import { Outlet, Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

const Layout = () => {
  return (
    <>

      <Navbar color="dark" dark expand="md">
        <Navbar.Brand href="/">TestSite</Navbar.Brand>
        <Link to="/movies" className="text-muted" >Movies</Link>
        <Nav.Link className="text-muted">Series</Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse navbar>
          <Nav className="mr-auto" navbar />
          <Link to="/login" className="text-muted mr-3">Log In</Link>
          <Link to="/register" className="text-muted">Register</Link>
        </Navbar.Collapse>
      </Navbar>

      {/* 
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </>
  )
};

export default Layout;




// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import React from 'react';

// function NavScrollExample() {
//     return (
//         <Navbar color="dark" dark expand="md">
//             <Navbar.Brand href="/dashboard">Code.Hub Dashboard</Navbar.Brand>
//             <Nav.Link to="/dashboard" className="text-muted" >Movies</Nav.Link>
//             <Nav.Link  className="text-muted">Series</Nav.Link>
//             <Navbar.Toggle  />
//             <Navbar.Collapse  navbar>
//                 <Nav className="mr-auto" navbar />
//                 <Nav.Link  className="text-muted">Log In</Nav.Link>
//                 <Nav.Link  className="text-muted">Register</Nav.Link>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// }

// export default NavScrollExample;


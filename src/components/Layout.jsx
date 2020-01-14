import React from 'react';

import { Navbar, Sidebar, Footer } from '.';


function Layout(props) {
  console.log(props);

  return (
    <div id="container">
      <Navbar />
      <main>
        {props.children}
      </main>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default Layout;

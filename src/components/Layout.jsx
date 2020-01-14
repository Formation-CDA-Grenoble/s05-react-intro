import React from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';


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

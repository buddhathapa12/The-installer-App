import React from 'react';
import Footer from './footer';
import Header from './Header';

function Layout(props) {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

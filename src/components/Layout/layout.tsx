import PropTypes from 'prop-types';
import React from 'react';
import { useWindowSize } from '../../components/libs/useWindowSize';
import { Footer } from './footer';
import Navbar from './header/navbar';

// @ts-ignore
const Layout = ({ children }) => {
  const [width] = useWindowSize();

  return (
    <>
      <div className="flex flex-col text-primary">
        <Navbar isMobile={width < 1025} />
        {children}
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

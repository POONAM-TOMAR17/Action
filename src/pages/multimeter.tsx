import Multimeter from '../components/Multimeter/Multimeter';
import React from 'react';

import ImgContainer from '../components/ContactUs/ImgContainer';
import OverView from '../components/ContactUs/OverView';
import Layout from '../components/Layout/layout';
import { useWindowSize } from '../components/libs/useWindowSize';
import TableContainer from '../components/Multimeter/TableContainer';
import BrandSection from '../components/Multimeter/BrandsSection';

const ContactUs = () => {
  const [width] = useWindowSize();
  return (
    <Layout>
      <ImgContainer />

      <Multimeter isMobile={width < 1025} />
      <TableContainer />
      <BrandSection />
    </Layout>
  );
};

export default ContactUs;

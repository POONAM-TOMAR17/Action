import React from 'react';
import Layout from '../components/Layout/layout';
import { useWindowSize } from '../components/libs/useWindowSize';
import Consulting from '../components/Consulting/Consulting';
import ImgContainer from '../components/Consulting/ImgContainer';

const ContactUs = () => {
  const [width] = useWindowSize();
  return (
    <Layout>
      <ImgContainer />
      <Consulting isMobile={width < 1025} />
    </Layout>
  );
};

export default ContactUs;

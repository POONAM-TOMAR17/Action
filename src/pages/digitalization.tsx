import React from 'react';
import CaseStudy from '../components/CaseStudy/CaseStudy';
import Layout from '../components/Layout/layout';
import { useWindowSize } from '../components/libs/useWindowSize';
import Benefits from '../components/Solutions/Digitalization/Benefits';
import ImgContainer from '../components/Solutions/Digitalization/ImgContainer';
import OverView from '../components/Solutions/Digitalization/OverView';

const AboutUs = () => {
  const [width] = useWindowSize();
  console.log(width);
  return (
    <Layout>
      <ImgContainer />
      <OverView />
      <Benefits />
      <CaseStudy singBlock />
    </Layout>
  );
};

export default AboutUs;

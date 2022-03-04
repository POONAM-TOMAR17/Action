import React from 'react';
import ImgContainer from '../../components/CaseStudy/LandingPage/ImgContainer';
import ListStudies from '../../components/CaseStudy/LandingPage/ListStudies';
import OverView from '../../components/CaseStudy/LandingPage/OverView';
import Layout from '../../components/Layout/layout';

const AboutusIndex = () => {
  return (
    <Layout>
      <ImgContainer />
      <OverView />
      <ListStudies />
    </Layout>
  );
};

export default AboutusIndex;

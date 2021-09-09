import React from 'react';
import { FooterImage } from '../components/AboutUs/footerImage';
import { ImgContainer } from '../components/AboutUs/mainBanner';
import { OurGoal } from '../components/AboutUs/ourGoal';
import { OurTeam } from '../components/AboutUs/ourTeam';
import { OverView } from '../components/AboutUs/overView';
import { ValuesPride } from '../components/AboutUs/valuesPride';
import Layout from '../components/Layout/layout';

const About = () => {
  return (
    <Layout>
      <ImgContainer />
      <OverView />
      <OurGoal />
      <ValuesPride />
      <FooterImage />
      <OurTeam />
    </Layout>
  );
};

export default About;

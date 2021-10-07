import React from 'react';
import ImgContainer from '../components/AboutUs/ImgContainer';
import OurGoal from '../components/AboutUs/OurGoal';
import OurTeam from '../components/AboutUs/OurTeam/OurTeam';
import OverView from '../components/AboutUs/OverView';
import ValuesPride from '../components/AboutUs/ValuesPride';
import Insights from '../components/Home/Insights/Insights';
import Layout from '../components/Layout/layout';
import { useWindowSize } from '../components/libs/useWindowSize';

const AboutUs = () => {
  const [width] = useWindowSize();
  console.log(width);
  return (
    <Layout>
      <ImgContainer />
      <OverView />
      <OurGoal />
      <ValuesPride />
      <OurTeam isMobile={width > 1024 ? false : true} />
      <Insights singBlock />
    </Layout>
  );
};

export default AboutUs;

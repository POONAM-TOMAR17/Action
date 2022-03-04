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
      {/* <ImgContainer name="name" img="/images/about-us-banner.jpg" /> */}
      <ImgContainer
        name="about us"
        img="http://wordpress.actionengineers.com/wp-content/uploads/2021/07/about-banner.png"
      />

      <OverView />
      {/* <OurGoal />
      <ValuesPride />
      <OurTeam isMobile={width > 1024 ? false : true} />
      <Insights singBlock /> */}
    </Layout>
  );
};

export default AboutUs;

import React from 'react';
import Benefits from '../components/Careers/Benefits';
import ImgContainer from '../components/Careers/ImgContainer';
import Openings from '../components/Careers/Openings';
import OurCulture from '../components/Careers/OurCulture';
import OverView from '../components/Careers/OverView';
import WorkWithUs from '../components/Home/WorkWithUs';
import Layout from '../components/Layout/layout';

const Careers = () => {
  return (
    <Layout>
      <ImgContainer />
      <OverView />
      <Benefits />
      <OurCulture />
      <Openings />
      <WorkWithUs />
    </Layout>
  );
};

export default Careers;

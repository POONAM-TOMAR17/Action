import React from 'react';
import ImgContainer from '../components/Careers/ImgContainer';
import OverView from '../components/Careers/OverView';
import WorkWithUs from '../components/Home/WorkWithUs';
import Layout from '../components/Layout/layout';

const Careers = () => {
  return (
    <Layout>
      <ImgContainer />
      <OverView />
      <WorkWithUs />
    </Layout>
  );
};

export default Careers;

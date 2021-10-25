import React from 'react';
import ImgContainer from '../components/Careers/ImgContainer';
import OverView from '../components/Careers/OverView';
import { WorkingBenifits } from '../components/Careers/workingBenifits';
import WorkWithUs from '../components/Home/WorkWithUs';
import Layout from '../components/Layout/layout';

const Careers = () => {
  return (
    <Layout>
      <ImgContainer />
      <OverView />
      <WorkingBenifits />
      <WorkWithUs />
    </Layout>
  );
};

export default Careers;

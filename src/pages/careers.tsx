import React from 'react';
import { Ambience } from '../components/Careers/ambience';
import { FestTrips } from '../components/Careers/festTrips';
import ImgContainer from '../components/Careers/ImgContainer';
import { Openings } from '../components/Careers/openings';
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
      <Ambience />
      <FestTrips />
      <Openings />
      <WorkWithUs />
    </Layout>
  );
};

export default Careers;

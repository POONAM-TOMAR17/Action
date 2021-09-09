import React from 'react';
import { Ambience } from '../components/Careers/ambience';
import { FestTrips } from '../components/Careers/festTrips';
import { FooterImage } from '../components/Careers/footerImage';
import { ImgContainer } from '../components/Careers/mainBanner';
import { Openings } from '../components/Careers/openings';
import { OverView } from '../components/Careers/overView';
import { WorkingBenifits } from '../components/Careers/workingBenifits';
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
      <FooterImage />
    </Layout>
  );
};

export default Careers;

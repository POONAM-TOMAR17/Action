import React from 'react';
import { Benifits } from '../components/Digitalization/benifits';
import { ImgContainer } from '../components/Digitalization/mainBanner';
import { OverView } from '../components/Digitalization/overView';
import CaseStudy from '../components/Home/CaseStudy/CaseStudy';
import Layout from '../components/Layout/layout';

const Digitalization = () => {
  return (
    <Layout>
      <ImgContainer />
      <OverView />
      <Benifits />
      <CaseStudy />
    </Layout>
  );
};

export default Digitalization;

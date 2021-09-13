import React from 'react';
import CaseStudy from '../components/Home/CaseStudy/CaseStudy';
import HeroSlider from '../components/Home/HeroSlider';
import Insights from '../components/Home/Insights/Insights';
import OurClients from '../components/Home/OurClients';
import OverView from '../components/Home/OverView';
import Solutions from '../components/Home/Solutions';
import Testimonials from '../components/Home/Testimonials/Testimonials';
import WorkWithUs from '../components/Home/WorkWithUs';
import Layout from '../components/Layout/layout';

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <OverView />
      <CaseStudy />
      <Solutions />
      <Insights />
      <Testimonials />
      <OurClients />
      <WorkWithUs />
    </Layout>
  );
};

export default Index;

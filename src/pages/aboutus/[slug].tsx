import AboutusContainer from '../../components/AboutUs/AboutusContainer';
import React from 'react';
import CaseStudyContainer from '../../components/CaseStudy/CaseStudyContainer';
import Layout from '../../components/Layout/layout';
import { useWindowSize } from '../../components/libs/useWindowSize';

const AboutusSlugIndex = () => {
  const [width] = useWindowSize();
  const isBrowser = () => typeof window !== 'undefined';
  var params = '';
  if (isBrowser()) {
    let location = window.location.href.split('#')[0];
    let allPara = location.split('/');
    params = allPara[allPara.length - 1];
  }

  return (
    <Layout>
      <AboutusContainer width={width} params={params} />
    </Layout>
  );
};

export default AboutusSlugIndex;

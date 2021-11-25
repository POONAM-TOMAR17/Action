import React from 'react';
import CaseStudyContainer from '../../components/CaseStudy/CaseStudyContainer';
import Layout from '../../components/Layout/layout';
import { useWindowSize } from '../../components/libs/useWindowSize';

const CaseStudySlugIndex = () => {
  const [width] = useWindowSize();
  const isBrowser = () => typeof window !== 'undefined';
  var params = '';
  if (isBrowser()) {
    let location = window.location.href;
    let allPara = location.split('/');
    params = allPara[allPara.length - 1];
  }

  return (
    <Layout>
      <CaseStudyContainer width={width} params={params} />
    </Layout>
  );
};

export default CaseStudySlugIndex;

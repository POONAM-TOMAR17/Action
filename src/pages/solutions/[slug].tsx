import React from 'react';
import Layout from '../../components/Layout/layout';
import { useWindowSize } from '../../components/libs/useWindowSize';
import SolutionsContainer from '../../components/Solutions/SolutionsContainer';

const SolutionsSlugIndex = () => {
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
      <SolutionsContainer width={width} params={params} />
    </Layout>
  );
};

export default SolutionsSlugIndex;

import queryString, { ParsedQuery } from 'query-string';
import React from 'react';
import Application from '../components/Apply/Application';
import ImgContainer from '../components/Apply/ImgContainer';
import Requirements from '../components/Apply/Requirements';
import { openingArray } from '../components/Careers/constants';
import Layout from '../components/Layout/layout';

const Apply = () => {
  const isBrowser = () => typeof window !== 'undefined';
  let params: ParsedQuery<string>;
  if (isBrowser()) {
    params = queryString.parse(window.location.search);
  }
  const filteredArray = openingArray.filter((item) => item.id === params?.pos);

  return (
    <Layout>
      <ImgContainer data={filteredArray[0]} />
      <Requirements data={filteredArray[0]} />
      <Application data={filteredArray[0]} />
    </Layout>
  );
};

export default Apply;

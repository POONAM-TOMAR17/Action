import queryString, { ParsedQuery } from 'query-string';
import React, { Fragment } from 'react';
import Application from '../components/Apply/Application';
import ImgContainer from '../components/Apply/ImgContainer';
import Requirements from '../components/Apply/Requirements';
import { openingArray } from '../components/Careers/constants';
import Layout from '../components/Layout/layout';
import { OpeningType } from '../components/libs/typeInterface';

const Apply = () => {
  const isBrowser = () => typeof window !== 'undefined';
  let params: ParsedQuery<string>;
  if (isBrowser()) {
    params = queryString.parse(window.location.search);
  }
  const filteredArray = openingArray.filter((item) => item.id === params?.pos);

  return (
    <Layout>
      {filteredArray &&
        filteredArray.length > 0 &&
        filteredArray.map((item: OpeningType, index: number) => (
          <Fragment key={index}>
            <ImgContainer img={item.img} name={item.name} />
            <Requirements jobRole={item.jobRole} duties={item.duties} />
            <Application name={item.name} />
          </Fragment>
        ))}
    </Layout>
  );
};

export default Apply;

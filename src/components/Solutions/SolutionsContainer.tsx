import React, { Fragment } from 'react';
import CaseStudy from '../../components/CaseStudy/CaseStudy';
import { SolutionDataType } from '../../components/libs/typeInterface';
import ImgContainer from './ImgContainer';
import MiddleSection from './MiddleSection';
import OverView from './OverView';
import { solutionsArray } from './solutionsArray';

interface ISolutionsContainerProps {
  params: string;
  width: string;
}

const SolutionsContainer = (props: ISolutionsContainerProps) => {
  const { params } = props;

  const filteredArray = solutionsArray.filter((item) => item.id === params);
  return (
    <>
      {filteredArray &&
        filteredArray.length > 0 &&
        filteredArray.map((item: SolutionDataType, index: number) => (
          <Fragment key={index}>
            <ImgContainer name={item.name} img={item.img} />
            <OverView title={item.title1} description={item.description1} />
            <MiddleSection
              title={item.title2}
              description={item.description2}
              services={item.services}
              title2={item.title3}
              description2={item.description3}
            />
            <CaseStudy name={item.name} caseStudyName={item.caseStudy} singBlock />
          </Fragment>
        ))}
    </>
  );
};

export default SolutionsContainer;

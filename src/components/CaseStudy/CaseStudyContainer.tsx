import React, { Fragment } from 'react';
import { CaseStudyInnerType } from '../../components/libs/typeInterface';
import { caseStudyArray } from './caseStudyArray';
import ImgContainer from './ImgContainer';
import OverView from './OverView';

interface ICaseStudyContainerProps {
  width: number;
  params: string;
}

const CaseStudyContainer = (props: ICaseStudyContainerProps) => {
  const { params } = props;
  const filteredArray = caseStudyArray.filter((item) => item.id === params);

  return (
    <>
      {filteredArray &&
        filteredArray.length > 0 &&
        filteredArray.map((item: CaseStudyInnerType, index: number) => (
          <Fragment key={index}>
            <ImgContainer name={item.name} img={item.bannerImg} />
            <OverView
              category={item.category}
              customer={item.customName}
              location={item.location}
              year={item.year}
              labelText={item.overView.labelText}
              title={item.overView.title}
              description={item.overView.description}
            />
            {/* <MainContents content={item.content} /> */}
          </Fragment>
        ))}
    </>
  );
};

export default CaseStudyContainer;

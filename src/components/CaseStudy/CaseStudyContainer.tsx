import React, { Fragment } from 'react';
import { CaseStudyInnerType } from '../../components/libs/typeInterface';
import { caseStudyArray } from './caseStudyArray';
import ImgContainer from './ImgContainer';
import ListStudies from './LandingPage/ListStudies';
import MainContents from './MainContents';
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
        filteredArray.map((item: CaseStudyInnerType, index: number) => {
          var currentIndex = caseStudyArray.findIndex((itemNew) => itemNew.id === item.id);
          let newIndex: number;
          if (currentIndex === caseStudyArray.length - 1) {
            newIndex = 0;
          } else {
            newIndex = currentIndex + 1;
          }
          return (
            <Fragment key={index}>
              <ImgContainer name={item.name} img={item.bannerImg} />
              <OverView
                category={item.category}
                customer={item.customerName}
                location={item.location}
                year={item.year}
                labelText={item.overView.labelText}
                title={item.overView.title}
                description={item.overView.description}
              />
              <MainContents content={item.content} />
              <ListStudies name={caseStudyArray[newIndex].id} isInnerPage />
            </Fragment>
          );
        })}
    </>
  );
};

export default CaseStudyContainer;

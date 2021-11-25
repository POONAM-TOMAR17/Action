import React, { Fragment } from 'react';
import { SolutionDataType, TextSectionType } from '../../components/libs/typeInterface';
import CaseStudy from './CaseStudy/CaseStudy';
import ImgContainer from './ImgContainer';
import OverView from './OverView';
import { solutionsArray } from './solutionsArray';
import TextBlocks from './TextBlocks';

interface ISolutionsContainerProps {
  params: string;
  width: number;
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
            <OverView
              labelText={item.overView.labelText}
              title={item.overView.title}
              description={item.overView.description}
            />
            {item.textSections &&
              item.textSections.length > 0 &&
              item.textSections.map((section: TextSectionType, i: number) => (
                <TextBlocks
                  key={i}
                  labelText={section.labelText}
                  title={section.title}
                  description={section.description}
                  blocks={section.blocks}
                  image={section.image}
                  isService={section.isService}
                  onlyImage={section.onlyImage}
                />
              ))}
            <CaseStudy name={item.name} caseStudyName={item.caseStudy} singBlock />
          </Fragment>
        ))}
    </>
  );
};

export default SolutionsContainer;

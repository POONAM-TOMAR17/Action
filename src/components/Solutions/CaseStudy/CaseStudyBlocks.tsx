import React from 'react';
import { caseStudyArray } from '../../constants';
import TableContainer from '../TableContainer';
import CaseStudyBlock from './CaseStudyBlock';

interface IInisghtsBlocks {
  singBlock?: boolean;
  name?: string;
}

const InsightsBlocks = (props: IInisghtsBlocks) => {
  const { singBlock, name } = props;

  const filterArray = caseStudyArray.filter((item) => item.name.toLowerCase() === name);
  return (
    <>
      {/* {!singBlock &&
        caseStudyArray &&
        caseStudyArray.map((listItem, index) => {
          return (
            <div
              key={index}
              className="w-full xs:py-5 lg:py-0 bg-customBackground-100 overflow-hidden"
            >
              <div className="w-full flex justify-start flex-wrap lg:flex-nowrap xs:px-4 lg:px-8 lg:container lg:mx-auto">
                <>
                  <CaseStudyBlock
                    isLeft={index % 2 === 0 ? true : false}
                    name={listItem.name}
                    description={listItem.description}
                    mainImage={listItem.mainImage}
                    logo={listItem.logo}
                  />
                </>
              </div>
            </div>
          );
        })}
      {singBlock && (
        <div className="w-full xs:py-5 lg:py-0 bg-customBackground-100 overflow-hidden">
          <div className="w-full flex justify-start flex-wrap lg:flex-nowrap xs:px-4 lg:px-8 lg:container lg:mx-auto">
            <>
              <CaseStudyBlock
                isLeft
                name={filterArray[0].name}
                description={filterArray[0].description}
                mainImage={filterArray[0].mainImage}
                logo={filterArray[0].logo}
              />
            </>
          </div>
        </div>
      )} */}
      <TableContainer />
    </>
  );
};

export default InsightsBlocks;

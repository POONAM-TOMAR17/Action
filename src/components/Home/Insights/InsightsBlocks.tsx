import React from 'react';
import { insightsList } from '../../../components/constants';
import InsightBlock from './InsightBlock';

interface IInisghtsBlocks {
  singBlock?: boolean;
}

const InsightsBlocks = (props: IInisghtsBlocks) => {
  const { singBlock } = props;
  return (
    <>
      {!singBlock &&
        insightsList &&
        insightsList.map((listItem, index) => {
          return (
            <div
              key={index}
              className="w-full xs:py-5 lg:py-0 bg-customBackground-100 overflow-hidden"
            >
              <div className="w-full flex justify-start flex-wrap lg:flex-nowrap xs:px-4 lg:px-8 lg:container lg:mx-auto">
                <>
                  <InsightBlock
                    isLeft={index % 2 === 0 ? true : false}
                    name={listItem.name}
                    description={listItem.description}
                    link={listItem.link}
                    src={listItem.image}
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
              <InsightBlock
                isLeft
                name={insightsList[0].name}
                description={insightsList[0].description}
                link={insightsList[0].link}
                src={insightsList[0].image}
              />
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default InsightsBlocks;

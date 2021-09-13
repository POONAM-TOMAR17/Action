import React from 'react';
import { insightsList } from '../../../components/constants';
import InsightBlock from './InsightBlock';

const InsightsBlocks = () => {
  return (
    <>
      {insightsList &&
        insightsList.map((listItem, index) => {
          return (
            <div key={index} className="w-full bg-customBackground-100 overflow-hidden">
              <div className="w-full flex justify-start xs:px-4 lg:px-8 lg:container lg:mx-auto">
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
    </>
  );
};

export default InsightsBlocks;

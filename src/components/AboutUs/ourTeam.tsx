import React from 'react';

import { BigBlock } from './bigBlock';
import { SmallBlocks } from './smallBlocks';

export const OurTeam = () => {
  return (
    <section className="w-full mx-auto mt-14 md:h-full flex justify-start items-center md:justify-start our-team">
      <div className="max-w-7xl mx-auto flex justify-start items-center px-4 sm:px-6 lg:px-8 md:justify-start flex-wrap">
        <BigBlock />
        <SmallBlocks />
      </div>
    </section>
  );
};

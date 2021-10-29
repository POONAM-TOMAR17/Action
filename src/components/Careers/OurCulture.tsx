import React from 'react';
import CultureSlider from './CultureSlider';
import VideoContainer from './VideoContainer';

const OurCulture = () => {
  return (
    <section className="w-full lg:h-full flex justify-start items-start flex-wrap">
      <div className="w-full h-full flex justify-between items-center xs:px-4 lg:px-8 mb-4 lg:justify-start lg:container lg:mx-auto">
        <div className="w-full lg:w-4/5 flex justify-start items-start flex-col space-y-4">
          <p className="text-sm uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
            Office And People
          </p>
          <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
            Glimpse of our culture
          </p>
        </div>
      </div>
      <div className="w-full">
        <VideoContainer />
      </div>
      <div className="w-full xs:mt-0 xs:mb-5 lg:my-14">
        <CultureSlider />
      </div>
    </section>
  );
};

export default OurCulture;

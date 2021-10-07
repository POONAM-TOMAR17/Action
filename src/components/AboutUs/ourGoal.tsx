import React from 'react';

const OurGoal = () => {
  return (
    <section className="w-full flex justify-start items-center flex-wrap xs:mt-5 lg:mt-8 mb-5 relative">
      <div className="w-full h-full xs:absolute xs:flex items-center justify-center lg:block lg:relative z-1">
        <img
          src="/images/goal-mission-banner.jpg"
          alt="about-us"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 w-full h-full bg-black bg-opacity-60" />
      </div>
      <div className="relative lg:absolute w-full lg:h-full flex items-center justify-start lg:top-0 lg:left-0">
        <div className="w-full flex items-center justify-between xs:px-4 lg:px-8 xs:py-8 lg:py-0 mb-5 lg:container lg:mx-auto">
          <div className="w-full flex items-start xs:flex-wrap xs:space-y-8 lg:justify-between lg:flex-nowrap lg:space-y-0">
            <div className="xs:w-full lg:flex-1 lg:pr-8 flex flex-wrap items-start justify-start">
              <div className="w-full flex items-center justify-start flex-nowrap mb-5">
                <div
                  className="w-20 h-20 bg-transparent flex items-center bg-contain bg-norepeat"
                  style={{ backgroundImage: 'url(/images/cut-circle.svg)' }}
                />
                <p className="flex whitespace-nowrap text-xl font-medium text-white transform -translate-x-12 uppercase pt-2">
                  Our Mission
                </p>
              </div>
              <p className="w-full flex items-start justify-start text-white">
                Building technology to expand the limits of human achievement while upholding the
                ethical, social and environmental responsibility to its highest standards.
              </p>
            </div>

            <div className="xs:w-full lg:flex-1 lg:pl-8 flex flex-wrap items-start justify-start">
              <div className="w-full flex items-center justify-start flex-nowrap mb-5">
                <div
                  className="w-20 h-20 bg-transparent flex items-center bg-contain bg-norepeat"
                  style={{ backgroundImage: 'url(/images/cut-circle.svg)' }}
                />
                <p className="flex whitespace-nowrap text-xl font-medium text-white transform -translate-x-12 uppercase pt-2">
                  Our Vision
                </p>
              </div>
              <p className="w-full flex items-start justify-start text-white">
                To be a global technology company functioning in multiple verticals by growing and
                nurturing relationships with our customers and employees alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGoal;

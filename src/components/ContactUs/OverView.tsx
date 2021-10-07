import React from 'react';

const OverView = () => {
  return (
    <section className="w-full h-full flex justify-between items-center xs:px-4 lg:px-8 mb-5 lg:justify-start lg:container lg:mx-auto">
      <div className="w-full lg:w-4/5 flex justify-start items-start flex-col space-y-4">
        <p className="text-sm uppercase tracking-loose text-customColors-200 mt-6 lg:mt-4">
          Contact
        </p>
        <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
          Schedule a meeting
        </p>
      </div>
    </section>
  );
};

export default OverView;

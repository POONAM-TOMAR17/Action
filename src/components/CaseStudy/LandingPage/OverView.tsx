import React from 'react';

const OverView = () => {
  return (
    <section className="w-full h-full flex justify-between items-center xs:px-4 lg:px-8 mb-5 lg:justify-start lg:container lg:mx-auto">
      <div className="w-full lg:w-4/5 flex justify-start items-start flex-col space-y-4">
        <p className="text-sm uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
          Journey
        </p>
        <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
          Building and Learning
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla nec
          arcu est. Penatibus imperdiet id elit nec, odio in tristique. Et ac integer dignissim nec.
          Eget vitae pulvinar neque eu cras. Velit turpis justo, tellus, in. Egestas phasellus etiam
          sed.....
        </p>
      </div>
    </section>
  );
};

export default OverView;

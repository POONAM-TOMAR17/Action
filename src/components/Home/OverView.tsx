import React from 'react';

const OverView = () => {
  return (
    <section className="w-full h-full flex justify-between items-center xs:px-4 lg:px-8 lg:mb-5 lg:justify-start lg:container lg:mx-auto">
      <div className="w-full lg:w-4/5 flex justify-start items-start flex-col space-y-4">
        <p className="text-sm uppercase font-display tracking-widest text-customColors-200 mt-6 lg:mt-4">
          Who We Are
        </p>
        <p className="font-medium text-4xl font-display text-customColors-100 tracking-relaxed leading-snug">
          {/* We are a technology & engineering company, that helps customers reinvent the future with
          right guidance, design thinking & innovations. */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor odio in tristique.
          Penatibus imperdiet id elit nec, odio in tristique. Et ac integer dignissim nec.
        </p>
        <p className="text-lg font-display">
          {/* At the center of everything we do,{' '}
          <span className="font-semibold">we are problem solvers.</span> The first step in solving
          any problem is to acknowledge it and then break it into manageable pieces. Leveraging our
          experience in building products over the past decade, at Actonate we have successfully
          built and helped scale solutions for leading enterprises and brands globally. */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor odio in tristique.
          Penatibus imperdiet id elit nec, odio in tristique. Et ac integer dignissim nec.
        </p>
      </div>
    </section>
  );
};

export default OverView;

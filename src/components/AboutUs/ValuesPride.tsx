import React from 'react';

const ValuesPride = () => {
  return (
    <section className="w-full h-full flex justify-between items-center flex-wrap xs:px-4 lg:px-8 lg:mb-5 lg:justify-start lg:container lg:mx-auto">
      <div className="w-full lg:w-4/5 flex justify-start items-start flex-col space-y-4">
        <p className="text-sm uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
          Our Values
        </p>
        <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
          Values we take pride in
        </p>
      </div>
      <div className="w-full grid xs:grid-cols-1 lg:grid-cols-3 xs:gap-5 lg:gap-10 mt-10">
        <div className="w-full flex items-start justify-start flex-wrap space-y-5">
          <div className="w-full h-48 flex itmes-center justify-center">
            <img
              src="/images/value-pride-1.png"
              alt="value-pride-1"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full flex items-start justify-start">
            <p className="">
              At our core, we strive for transparency with our customers and employees by being
              unrelentingly honest at all times.
            </p>
          </div>
        </div>

        <div className="w-full flex items-start justify-start flex-wrap space-y-5">
          <div className="w-full h-48 flex itmes-center justify-center">
            <img
              src="/images/value-pride-2.png"
              alt="value-pride-2"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full flex items-start justify-start">
            <p className="">
              We handle mission-critical systems for our customers and being accountable for any
              lapses plays an important role in customer success.
            </p>
          </div>
        </div>

        <div className="w-full flex items-start justify-start flex-wrap space-y-5">
          <div className="w-full h-48 flex itmes-center justify-center">
            <img
              src="/images/value-pride-3.png"
              alt="value-pride-3"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full flex items-start justify-start">
            <p className="">
              Promising unmeasurable reliability and delivering on it, we have been able to break
              the growth barriers every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesPride;

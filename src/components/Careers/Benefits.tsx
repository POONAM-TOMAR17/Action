import React from 'react';

const Benefits = () => {
  return (
    <section className="w-full h-full flex justify-between items-center xs:px-4 lg:px-8 xs:mb-5 lg:mb-10 lg:justify-start lg:container lg:mx-auto">
      <div className="w-full flex flex-col">
        <div className="w-full lg:w-4/5 flex justify-start items-start flex-col space-y-4">
          <p className="text-sm uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
            What You Gain
          </p>
          <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
            Benefits
          </p>
        </div>
        <div className="w-full grid xs:grid-cols-1 lg:grid-cols-3 xs:gap-5 lg:gap-10 mt-10">
          <div className="w-full flex items-start justify-start flex-wrap space-y-5">
            <div className="w-full h-48 flex itmes-center justify-center">
              <img
                src="/images/careers/vector-1.png"
                alt="careers"
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
                src="/images/careers/vector-2.png"
                alt="careers"
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
                src="/images/careers/vector-3.png"
                alt="careers"
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
      </div>
    </section>
  );
};

export default Benefits;

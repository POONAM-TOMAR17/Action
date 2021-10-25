import React from 'react';

const Benefits = () => {
  return (
    <section className="w-full h-full flex justify-between items-center xs:px-4 lg:px-8 xs:mb-5 lg:mb-10 lg:justify-start lg:container lg:mx-auto">
      <div className="w-full flex flex-col">
        <div className="w-full lg:w-4/5 flex justify-start items-start flex-col space-y-4">
          <p className="text-sm uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
            Benefits
          </p>
          <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
            Impacts of Digitalization
          </p>
        </div>
        <div className="w-full grid xs:grid-cols-1 lg:grid-cols-2 xs:gap-5 lg:gap-10 mt-10">
          <div className="w-full flex items-start justify-start flex-wrap space-y-5">
            <div className="w-full h-48 flex itmes-center justify-center">
              <img
                src="/images/solutions/digitalization/digi-vector-1.png"
                alt="digitalization"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full flex items-start justify-start">
              <p className="">
                Improve turnaround times by reducing the need to collect, print or signed documents.
                Faster turnaround means, faster sales conversion, quicker delivery and better
                customer satisfaction
              </p>
            </div>
          </div>

          <div className="w-full flex items-start justify-start flex-wrap space-y-5">
            <div className="w-full h-48 flex itmes-center justify-center">
              <img
                src="/images/solutions/digitalization/digi-vector-2.png"
                alt="digitalization"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full flex items-start justify-start">
              <p className="">
                Share and collaborate across multiple locations, business units or externally with
                customers in real-time with a searchable and organized repository of information.
                This can help reduce rework and improve validation with continuous feedback.
              </p>
            </div>
          </div>

          <div className="w-full flex items-start justify-start flex-wrap space-y-5">
            <div className="w-full h-48 flex itmes-center justify-center">
              <img
                src="/images/solutions/digitalization/digi-vector-3.png"
                alt="digitalization"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full flex items-start justify-start">
              <p className="">
                Connect the dots by converting the stored information into actionable insights by
                running continuous analytics on the information being collected. These insights can
                help you clear the mist and identify missed opportunities.
              </p>
            </div>
          </div>

          <div className="w-full flex items-start justify-start flex-wrap space-y-5">
            <div className="w-full h-48 flex itmes-center justify-center">
              <img
                src="/images/solutions/digitalization/digi-vector-4.png"
                alt="digitalization"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full flex items-start justify-start">
              <p className="">
                Faster reconciliation and decision making, with data flowing in different
                departments and CXOs in the real-time. Faster decision making can result in solving
                problems for future today and a better control on the organization’s growth curve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

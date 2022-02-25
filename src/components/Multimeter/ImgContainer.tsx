import React from 'react';

const ImgContainer = () => {
  return (
    <div className="border-b bg-gray-700">
      <section className="w-full h-full flex  justify-between items-center mb-5 lg:justify-start lg:container lg:mx-auto">
        <div className="w-full lg:h-full flex-wrap lg:justify-start ">
          <p className="lg:text-4xl xs:text-3xl font-semibold xs:text-center lg:text-left text-customColors-900 py-8 xs:px-4">
            MULTIMETER ANALOG
          </p>
          <div className="xs:ml-4">
            <div className="w-full flex items-center justify-start  lg:container lg:mx-auto">
              <a
                href="/"
                className="uppercase text-customColors-400 text-xs font-medium tracking-loose hover:underline"
              >
                Action Engineers
              </a>
              <span className="uppercase text-customColors-400 text-xs mx-2">/</span>
              <p className="uppercase text-customColors-400 text-xs font-bold tracking-loose">
                Multimeter analog
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default ImgContainer;

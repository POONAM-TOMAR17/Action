import React from 'react';

const AddressForm = () => {
  return (
    <div className="">
      <section className="w-full h-full flex justify-between items-center xs:px-4 lg:px-8 mb-5 lg:justify-start lg:container lg:mx-auto">
        <div className="w-full lg:w-4/5 flex justify-start items-start flex-col space-y-4">
          <p className="text-sm uppercase tracking-loose text-customColors-200 mt-6 lg:mb-6 lg:mt-4">
            Find us at
          </p>
        </div>
      </section>
      <div className="w-full flex items-center justify-between xs:px-4 lg:px-8 xs:py-8 lg:py-0 mb-6 lg:container lg:mx-auto">
        <div className="w-full flex items-start xs:flex-wrap xs:space-y-8 lg:justify-between lg:flex-nowrap lg:space-y-0">
          <div className="xs:w-full lg:flex-1 lg:pr-8 flex flex-wrap items-start justify-start">
            <div className="w-full items-center justify-start flex-nowrap mb-5">
              <p className="text-4xl font-inter text-customColors-100 font-semibold  mb-4">
                Actonate IT Solutions Pvt Ltd.
              </p>
              <p className="text-lg font-light text-customColors-100">First Floor,Action House</p>
              <p className="text-lg font-light text-customColors-100">
                Vadsar bridge(west end) , Makarpura
              </p>
              <p className="text-md font-light text-customColors-100">Vadodara Gujarat 390010</p>
              <p className="text-md font-semibold  pt-4 text-customColors-500">+91 9965500007</p>
              <p className="text-md font-semibold  pt-4 text-customColors-500">
                contact@actonate.com
              </p>
            </div>
          </div>

          <div className="xs:w-full lg:flex-1 lg:pl-8 flex flex-wrap items-start justify-start">
            <p className="w-full flex items-center justify-center text-black">
              <img src="/images/map.png" alt="about-us" className=" object-cover rounded-full" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;

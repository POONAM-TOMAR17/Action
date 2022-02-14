import React from 'react';

const WorkWithUs = () => {
  return (
    <section className="w-full lg:h-full flex justify-start items-start flex-wrap">
      <div className="w-full h-full flex justify-start items-start relative">
        {/* <img
          src="http://wordpress.actionengineers.com/wp-content/uploads/2021/07/Inquire-Us.jpg"
          alt="work-with-us"
          className="xs:w-full xs:h-80 xs:object-cover lg:w-auto lg:h-auto xs:object-unset"
        /> */}
        <img
          src="http://wordpress.actionengineers.com/wp-content/uploads/2021/07/Inquire-Us.jpg"
          className="w-full h-full object-cover"
          alt="main-image"
        />
        <div className="w-full h-full absolute left-0 top-0">
          <div className="w-full h-full flex justify-start items-center flex-wrap xs:px-4 lg:px-8 lg:container lg:mx-auto">
            <div className="xs:w-3/5 left-10 lg:left-24 lg:w-3/5 h-full flex flex-col justify-center items-left relative">
              {/* <div className="w-full h-full flex items-end lg:items-center justify-center bg-white bg-opacity-80 xs:py-5 lg:py-0 lg:px-15 wwu-bg">
                <div className="w-full flex flex-col wwu-text lg:ml-5"> */}
              <p className="xs:ml-6 lg:ml-0 text-md uppercase font-display text-white">
                Working with us
              </p>
              <p className="xs:hidden lg:block font-display text-2xl leading-9 font-bold text-white mt-3 pr-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor odio in tristique.
              </p>
              {/* <a
                href=" "
                className="w-3/12 border text-base rounded-sm uppercase text-white mt-6 border-white p-2"
              >
                Inquire us
              </a> */}
              <div className="text-left mt-6 sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex font-display tracking-wide leading-7 text-base font-semibold text-pink-100 uppercase justify-center py-0.5 px-5 border border-white shadow-sm text-md  rounded-sm   hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Inquire us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start items-center flex-wrap py-4 xs:px-4 lg:px-8 lg:container lg:mx-auto lg:hidden">
        <p className="w-full text-left text-base text-customColors-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor odio in tristique.
          Penatibus imperdiet id elit nec, odio in tristique. Et ac integer dignissim nec.
        </p>
      </div>
    </section>
  );
};

export default WorkWithUs;

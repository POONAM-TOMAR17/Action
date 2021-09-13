import React from 'react';

const WorkWithUs = () => {
  return (
    <section className="w-full lg:h-full flex justify-start items-start flex-wrap">
      <div className="w-full h-full flex justify-start items-start relative">
        <img
          src="/images/footer-banner.png"
          alt="work-with-us"
          className="xs:w-full xs:h-80 xs:object-cover lg:w-auto lg:h-auto xs:object-unset"
        />
        <div className="w-full h-full absolute left-0 top-0">
          <div className="w-full h-full flex justify-start items-center flex-wrap xs:px-4 lg:px-8 lg:container lg:mx-auto">
            <div className="xs:w-3/5 left-10 lg:left-24 lg:w-2/5 h-full flex justify-center items-center relative">
              <div className="w-full h-full flex items-end lg:items-center justify-center bg-white bg-opacity-80 xs:py-5 lg:py-0 lg:px-15 wwu-bg">
                <div className="w-full flex flex-col wwu-text lg:ml-5">
                  <p className="xs:ml-6 lg:ml-0 text-5xl text-customColors-600">Working with us</p>
                  <p className="xs:hidden lg:block text-base text-customColors-100 mt-3 pl-2 pr-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor odio in
                    tristique. Penatibus imperdiet id elit nec, odio in tristique. Et ac integer
                    dignissim nec.
                  </p>
                </div>
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

import React from 'react';

const WorkWithUs = () => {
  return (
    <section className="w-full h-full flex justify-start items-start relative">
      <img src="/images/footer-banner.png" alt="work-with-us" className="footer-banner" />
      <div className="w-full h-full absolute left-0 top-0">
        <div className="w-full h-full flex justify-start items-center flex-wrap xs:px-4 lg:px-8 lg:container lg:mx-auto">
          <div className="lg:left-24 lg:w-2/5 h-full flex justify-center items-center relative">
            <div className="w-full h-full flex items-center justify-center bg-white bg-opacity-80 lg:px-15 wwu-bg">
              <div className="font-raleway w-full flex flex-col wwu-text">
                <p className="text-4xl text-customColors-600">Working with us</p>
                <p className="xs:hidden lg:block text-base text-customColors-100 mt-3 pl-2 pr-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor odio in tristique.
                  Penatibus imperdiet id elit nec, odio in tristique. Et ac integer dignissim nec.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-start items-center flex-wrap xs:px-4 lg:px-8 lg:container lg:mx-auto lg:hidden">
          <p className="font-raleway text-base text-customColors-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor odio in tristique.
            Penatibus imperdiet id elit nec, odio in tristique. Et ac integer dignissim nec.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;

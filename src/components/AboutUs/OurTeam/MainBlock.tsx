import React from 'react';

const MainBlock = () => {
  return (
    <div className="w-full flex xs:flex-col lg:flex-row items-center justify-start">
      <div className="lg:flex-1 flex items-center justify-center xs:mb-5 lg:mb-0 lg:mr-10">
        <img
          src="/images/user-1.png"
          alt="shoaib-merchant"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="xs:w-full lg:w-1/2 flex items-start justify-start flex-col">
        <p className="text-3xl font-medium mb-5">Shoaib Merchant</p>
        <p className="italic mb-5">Actonate Founder & C.E.O</p>
        <p className="font-light text-customColors-100 mb-5">
          Shoaib has been in the business and working since more than 10 years. Software Engineer,
          Project architect and designer, he focuses over finding and fixing people’s problems
          through his expertise in understanding them and their environment, experience or/and
          product.
        </p>
        <div className="w-full flex items-center justify-start relative xs:mt-8 lg:mt-14">
          <div className="w-full absolute left-0 transform -translate-y-2 z-1">
            <img src="/images/double-quotes.png" className="w-28" />
          </div>
          <p className="italic text-customColors-100 pl-6">
            “Anything can work well if it has a well working thought out behind it”.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;

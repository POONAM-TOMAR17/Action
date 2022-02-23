import React from 'react';
import styled from 'styled-components';

const MainText = styled.p`
   {
    font-size: 32px;
    line-height: 48px;
    font-style: normal;
    font-weight: bold;
  }
`;
const BrandSection = () => {
  return (
    <section className="w-full h-full flex justify-start items-start flex-col xs:px-6 lg:px-0 mb-14 lg:container lg:mx-auto">
      <div className="w-4/5 flex justify-start items-start flex-col space-y-4">
        <p className="text-sm uppercase tracking-widest text-customColors-200 mt-4">Our Clients</p>
        <MainText className=" text-3xl text-black-100 font-display font-bold tracking-relaxed leading-snug ">
          Makes/Brands
        </MainText>
      </div>
      <div className="w-full grid xs:grid-cols-3 xs:gap-3 lg:grid-cols-3 lg:gap-15 xs:pt-5 lg:pt-10">
        <div className="w-full flex items-center  overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800/http://wordpress.actionengineers.com/wp-content/uploads/2020/08/granite-surface-platemechanical-8-800x400.jpg"
              alt="Siemens"
              className="w-full h-full object-contain"
              //   style={{ objectFit: 'none' }}
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800/http://wordpress.actionengineers.com/wp-content/uploads/2020/08/steel-caliper-checkermechanical-10-800x400.jpg"
              alt="Maruti Suzuki"
              className="w-full h-full object-contain"
              //   style={{ objectFit: 'none' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;

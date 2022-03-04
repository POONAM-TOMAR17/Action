import React from 'react';
import styled from 'styled-components';
import { ButtonArrow } from '../../../../static/svg/ButtonArrow';
import InsightsBlocks from './InsightsBlocks';
interface IInsights {
  singBlock?: boolean;
}

const MainText = styled.p`
   {
    font-size: 32px;
    line-height: 48px;
    font-style: normal;
    font-weight: extrabold;
  }
`;
const Insights = (props: IInsights) => {
  const { singBlock } = props;
  return (
    <section
      className={`w-full flex justify-start items-center flex-wrap ${singBlock ? '' : ' lg:mb-5'}`}
    >
      <div className="w-full pt-10 flex items-center justify-between xs:px-4 lg:px-8 lg:my-5 lg:container lg:mx-auto">
        <div className="w-full lg:w-5/5 flex justify-start items-start flex-col space-y-4">
          {!singBlock && (
            <p className="text-sm uppercase font-montserrat tracking-widest text-customColors-200">
              Our Insights
            </p>
          )}
          <p className=" text-3xl text-black-100 font-montserrat font-extrabold tracking-relaxed leading-snug">
            {!singBlock
              ? `National Accreditation Board for Testing and Calibration Laboratories (NABL)`
              : `Insights`}
          </p>
        </div>
        {/* <div className="xs:hidden lg:flex-1 lg:flex justify-end items-start">
          <a
            href="/insights"
            className="flex items-center justify-center border border-buttonColor text-buttonColor px-4 py-1 rounded-sm transform transition-all duration-300 hover:bg-buttonColor hover:text-white cs-readmore"
          >
            View All
            <ButtonArrow className="ml-3" />
          </a>
        </div> */}
      </div>
      <div className="w-full">
        <InsightsBlocks singBlock={singBlock} />
      </div>
    </section>
  );
};

export default Insights;

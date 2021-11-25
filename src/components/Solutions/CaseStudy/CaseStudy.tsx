import React from 'react';
import { ButtonArrow } from '../../../../static/svg/ButtonArrow';
import CaseStudyBlocks from './CaseStudyBlocks';
interface ICaseStudy {
  singBlock?: boolean;
  name: string;
  caseStudyName: string;
}

const CaseStudy = (props: ICaseStudy) => {
  const { singBlock, name, caseStudyName } = props;
  return (
    <section
      className={`w-full flex justify-start items-center flex-wrap${singBlock ? '' : ' lg:mb-5'}`}
    >
      <div className="w-full flex items-center justify-between xs:px-4 lg:px-8 lg:my-5 lg:container lg:mx-auto">
        <div className="w-full lg:w-4/5 flex justify-start items-start flex-col space-y-4">
          <p className="text-sm uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
            Case Study
          </p>
          <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
            {name} Case Studies
          </p>
        </div>
        <div className="xs:hidden lg:flex-1 lg:flex justify-end items-start">
          <a
            href="/insights"
            className="flex items-center justify-center border border-buttonColor text-buttonColor px-4 py-1 rounded-sm transform transition-all duration-300 hover:bg-buttonColor hover:text-white cs-readmore"
          >
            View All
            <ButtonArrow className="ml-3" />
          </a>
        </div>
      </div>
      <div className="w-full">
        <CaseStudyBlocks singBlock={singBlock} name={caseStudyName} />
      </div>
    </section>
  );
};

export default CaseStudy;

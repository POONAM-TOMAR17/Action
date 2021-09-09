import React from 'react';
import { ButtonArrow } from '../../../../static/svg/ButtonArrow';
import CaseStudySlider from './CaseStudySlider';

const CaseStudy = () => {
  return (
    <section className="w-full flex justify-start items-center flex-wrap lg:mt-10">
      <div className="w-full flex items-center justify-between xs:px-4 lg:px-8 lg:mb-5 lg:container lg:mx-auto">
        <div className="w-4/5 flex justify-start items-start flex-col space-y-4">
          <p className="text-sm uppercase tracking-widest text-customColors-200 mt-4">Case Study</p>
          <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
            Our experiences & Understanding
          </p>
        </div>
        <div className="lg:flex-1 flex justify-end items-start">
          <a
            href="/case-study"
            className="flex items-center justify-center border border-buttonColor text-buttonColor px-4 py-1 rounded-sm transform transition-all duration-300 hover:bg-buttonColor hover:text-white"
          >
            View All
            <ButtonArrow className="ml-3" />
          </a>
        </div>
      </div>
      <div className="w-full">
        <CaseStudySlider />
      </div>
    </section>
  );
};

export default CaseStudy;

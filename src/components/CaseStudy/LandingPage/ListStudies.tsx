import React from 'react';
import SingleBlockStudy from '../SingleBlockStudy';
import SliderBlockStudy from '../SliderBlockStudy';

interface IListStudiesProps {
  name?: string;
  isInnerPage?: boolean;
}

const ListStudies = (props: IListStudiesProps) => {
  return (
    <section
      className={`w-full flex justify-start items-center flex-wrap ${
        props.isInnerPage ? ' mb-10' : ''
      }`}
    >
      <div className="w-full flex items-center justify-between xs:px-4 lg:px-8 mb-5 lg:container lg:mx-auto">
        <div className="w-full lg:w-4/5 flex justify-start items-start flex-col space-y-4">
          <p className="text-sm uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
            {props.isInnerPage ? `More Case Study` : `Case Study`}
          </p>
          <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
            Our experiences & Understanding
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full flex xs:flex-wrap lg:flex-nowrap xs:px-4 lg:px-0">
          <SingleBlockStudy name={props.name ? props.name : 'sapna-online'} />
        </div>

        {!props.isInnerPage && (
          <div className="w-full flex items-center justify-between xs:px-4 lg:px-8 lg:my-14 lg:container lg:mx-auto">
            <SliderBlockStudy />
          </div>
        )}
      </div>
    </section>
  );
};

export default ListStudies;

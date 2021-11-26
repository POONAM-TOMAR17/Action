import React from 'react';
import { ButtonArrow } from '../../../static/svg/ButtonArrow';
import { placeholder } from '../../components/constants';
import { caseStudyArray } from './caseStudyArray';

interface ISingleBlockStudyProps {
  name: string;
}

const SingleBlockStudy = (props: ISingleBlockStudyProps) => {
  const filteredArray = caseStudyArray.filter((item) => item.id === props.name);
  return (
    <>
      <div className="w-full lg:flex-1 flex items-center justify-center lg:-ml-32 relative">
        {filteredArray[0].img !== undefined && (
          <img
            src={filteredArray[0].img !== '' ? filteredArray[0].img : placeholder}
            className="w-full h-full object-contain"
          />
        )}
      </div>
      <div className="w-full lg:w-1/2 flex items-start content-center justify-center flex-wrap space-y-5 lg:px-16 bg-customBackground-100">
        <p className="w-full font-medium text-3xl text-customColors-100 xs:mt-5 lg:mt-0">
          {filteredArray[0].name}
        </p>
        <p className="w-full text-lg font-light">{filteredArray[0].description}</p>
        <a
          href={filteredArray[0].link}
          className="w-full flex items-center justify-start uppercase font-medium text-customColors-100 cs-readmore"
        >
          Read Article
          <ButtonArrow className="ml-2 w-4 h-4" strokeWidth="1" />
        </a>
      </div>
    </>
  );
};

export default SingleBlockStudy;

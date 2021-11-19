import React from 'react';
import { ButtonArrow } from '../../../static/svg/ButtonArrow';

interface IInsightBlock {
  name: string;
  description: string;
  link?: string;
  mainImage: string;
  logo: string;
  isLeft?: boolean;
}

const InsightBlock = (props: IInsightBlock) => {
  const { name, description, link, mainImage, logo, isLeft } = props;

  return (
    <>
      {isLeft && (
        <div className="w-full lg:flex-1 flex items-center justify-center lg:-ml-32 relative">
          <div className="w-full h-full flex items-center justify-center absolute top-0 left-0">
            <div className="absolute w-full h-full bg-black bg-opacity-60" />
            <img src={logo} className="w-1/2 h-1/2 object-contain z-10" />
          </div>
          <img src={mainImage} className="w-full h-full object-contain" />
        </div>
      )}
      <div
        className={`w-full lg:w-1/2 flex items-start content-center justify-center flex-wrap space-y-5${
          isLeft ? ' lg:pl-20' : ' lg:pr-20 xs:order-1 lg:order-0'
        }`}
      >
        <p className="w-full font-medium text-3xl text-customColors-100 xs:mt-5 lg:mt-0">{name}</p>
        <p className="w-full text-lg font-light">{description}</p>
        <a
          href={link}
          className="w-full flex items-center justify-start uppercase font-medium text-customColors-100 cs-readmore"
        >
          Read Article
          <ButtonArrow className="ml-2 w-4 h-4" strokeWidth="1" />
        </a>
      </div>
      {!isLeft && (
        <div className="w-full lg:flex-1 flex items-center justify-center lg:-mr-32 xs:order-0 lg:order-1">
          <img src={mainImage} className="w-full h-full object-contain" />
        </div>
      )}
    </>
  );
};

export default InsightBlock;

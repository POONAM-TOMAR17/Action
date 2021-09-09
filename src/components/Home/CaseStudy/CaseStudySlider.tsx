import React from 'react';
import Slider from 'react-slick';
import { ButtonArrow } from '../../../../static/svg/ButtonArrow';
import { caseStudyArray } from '../../../components/constants';
import { CaseStudyType } from '../../../components/libs/typeInterface';

const CaseStudySlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    variableWidth: true
  };
  return (
    <Slider {...settings} className="w-full lg:h-106 overflow-hidden relative cs-slider">
      {caseStudyArray.map((csItem: CaseStudyType, index: number) =>
        index % 2 !== 1 ? (
          <>
            <div className="h-full flex relative overflow-hidden">
              <div className="w-full h-full flex items-center justify-center cs-main">
                <img
                  src={csItem.mainImage}
                  alt={csItem.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full absolute flex items-center justify-center bg-black bg-opacity-50 left-0 cs-details">
                <div className="w-full flex items-center flex-col space-y-5 p-5">
                  <div className="w-4/5 flex items-center justify-center">
                    <img
                      src={csItem.logo}
                      className="w-full h-full object-contain"
                      alt={csItem.name}
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-center flex-wrap text-white space-y-2">
                    <p className="w-full text-lg capitalize font-medium">{csItem.name}</p>
                    <p className="w-full">{csItem.description}</p>
                    <a href="#" className="w-full flex items-center justify-start cursor-pointer">
                      Read Article <ButtonArrow className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="m-14 flex-1 h-4/5 flex relative overflow-hidden">
              <div className="w-full h-full flex items-center justify-center cs-main">
                <img
                  src={csItem.mainImage}
                  alt={csItem.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full absolute flex items-center justify-center bg-black bg-opacity-50 left-0 cs-details">
                <div className="w-full flex justify-between space-x-5 p-5">
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={csItem.logo}
                      className="w-full h-full object-contain"
                      alt={csItem.name}
                    />
                  </div>
                  <div className="flex-1 flex items-start justify-start flex-wrap text-white space-y-2">
                    <p className="w-full text-lg capitalize font-medium">{csItem.name}</p>
                    <p className="w-full">{csItem.description}</p>
                    <a href="#" className="w-full flex items-center justify-start cursor-pointer">
                      Read Article <ButtonArrow className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </Slider>
  );
};

export default CaseStudySlider;

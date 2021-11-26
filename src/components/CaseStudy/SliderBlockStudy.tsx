import React from 'react';
import Slider from 'react-slick';
import { ButtonArrow } from '../../../static/svg/ButtonArrow';
import { placeholder } from '../../components/constants';
import { CaseStudyInnerType } from '../../components/libs/typeInterface';
import { caseStudyArray } from './caseStudyArray';

const SliderBlockStudy = () => {
  const filteredArray = caseStudyArray.filter((item) => item.id !== 'sapna-online');

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false
        }
      }
    ]
  };
  return (
    <>
      <Slider
        {...settings}
        className="w-full overflow-hidden relative xs:mt-5 xs:-mx-px lg:mt-0 lg:-mx-5"
      >
        {filteredArray.map((csItem: CaseStudyInnerType, index: number) => (
          <div key={index} className="w-full lg:h-full">
            <div className="flex-1 xs:my-5 xs:mx-px lg:m-5">
              <a
                href={csItem.link}
                className="w-full lg:h-106 flex items-center justify-center outline-none focus:outline-none shadow-none focus:shadow-none"
              >
                <img
                  src={csItem.img !== '' ? csItem.img : placeholder}
                  alt={csItem.name}
                  className="w-full h-full object-cover"
                />
              </a>
              <div className="w-full h-full flex items-center justify-center">
                <div className="flex-1 flex items-center justify-center flex-wrap space-y-2 py-5">
                  <a
                    href={csItem.link}
                    className="w-full font-medium xs:text-lg lg:text-3xl text-customColors-100 capitalize"
                  >
                    {csItem.name}
                  </a>
                  <p className="w-full text-lg font-light">{csItem.description}</p>
                  <a
                    href="#"
                    className="w-full flex items-center justify-start uppercase font-medium text-customColors-100 cs-readmore"
                  >
                    Read Article <ButtonArrow className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SliderBlockStudy;

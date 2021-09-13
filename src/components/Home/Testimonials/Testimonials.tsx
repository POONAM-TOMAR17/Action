import React from 'react';
import Slider from 'react-slick';
import { ArrowLeft } from '../../../../static/svg/ArrowLeft';
import { ArrowRight } from '../../../../static/svg/ArrowRight';
import { testimonialsList } from '../../../components/constants';

const Testimonials = () => {
  function NextArrow(props: { className?: string; style?: object; onClick?: () => void }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`cursor-pointer flex justify-center items-center ${className}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <ArrowRight className="text-black" />
      </div>
    );
  }

  function PrevArrow(props: { className?: string; style?: object; onClick?: () => void }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`cursor-pointer flex justify-center items-center ${className}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <ArrowLeft className="text-black" />
      </div>
    );
  }

  const settings = {
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    infinite: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };
  return (
    <section className="w-full h-full flex justify-between items-center xs:px-4 lg:px-8 lg:my-5 lg:justify-start lg:container lg:mx-auto">
      <div className="w-full lg:max-w-5.5xl lg:mx-auto py-10 flex justify-start items-start flex-col">
        <Slider {...settings} className="w-full testimonials-slider">
          {testimonialsList &&
            testimonialsList.map((item, index) => (
              <div key={index} className="w-full">
                <div className="w-full flex items-center justify-between xs:flex-wrap lg:flex-nowrap xs:pt-20 xs:pb-5 lg:py-20">
                  <div className="w-full lg:w-3/5 flex items-center justify-start relative lg:pr-5">
                    <img
                      src="/images/double-quotes.png"
                      alt="double-quotes"
                      className="absolute xs:w-1/2 lg:w-1/3 transform translate-x-1/2 left-0 z-1"
                      style={{ top: '-80px' }}
                    />
                    <p className="font-light text-lg">“ {item.value} “</p>
                  </div>
                  <div className="w-full lg:w-2/5 flex items-start justify-center pl-5 xs:mt-5 lg:mt-0">
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <p className="w-full flex items-center justify-start text-customColors-100 font-medium text-lg relative">
                        <span className="w-5 absolute border-b border-customColors-100 transform -translate-x-full -ml-2" />
                        {item.name}
                      </p>
                      <p className="">{item.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

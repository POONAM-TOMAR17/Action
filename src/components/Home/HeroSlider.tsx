import React from 'react';
import { mainSlider } from '../constants';

const HeroSlider = () => {
  return (
    <section className="w-full lg:h-full flex justify-between items-center lg:mb-5">
      <div className="w-full lg:h-full flex justify-start items-center flex-wrap lg:justify-start relative">
        {/* Slider */}
        <div className="w-full h-full relative main-slider swiper-container">
          {mainSlider.map(
            (item, index) =>
              index === 0 && (
                <div
                  key={index}
                  className="w-full h-full flex items-center justify-center relative overflow-hidden swiper-slide"
                >
                  <div className="w-full h-full absolute left-0 z-1">
                    <img src={item.src} className="w-full h-full object-cover" alt="main-image" />
                  </div>
                  <p className="xs:w-full xs:px-6 text-white text-5xl font-bold lg:w-1/2 lg:px-14 lg:leading-normal">
                    {item.text}
                  </p>
                  <img
                    src="/images/a-vector.png"
                    className="h-1/2 lg:h-11/12 object-contain absolute bottom-0 right-0 -mr-3"
                  />
                </div>
              )
          )}

          {/* <div className="w-full h-full flex items-center justify-center absolute top-0">
            <div className="w-full h-full xs:px-4 lg:px-8 lg:container lg:mx-auto relative">
              <div className="swiper-button-next swiper-button-white" />
              <div className="swiper-button-prev swiper-button-white" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;

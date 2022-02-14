import React from 'react';
import { mainSlider } from '../constants';

const HeroSlider = () => {
  return (
    <section className="w-full lg:h-full flex justify-between items-center lg:mb-5">
      <div className="w-full lg:h-full flex justify-start items-center flex-wrap lg:justify-start relative">
        {/* Slider */}
        <div
          className="w-full h-full relative main-slider swiper-container"
          style={{ height: '600px' }}
        >
          {mainSlider.map(
            (item, index) =>
              index === 0 && (
                <div
                  key={index}
                  className="w-full h-full flex items-center justify-center relative overflow-hidden swiper-slide"
                >
                  <div className="w-full h-full absolute left-0 z-1">
                    {/* <img src={item.src} className="w-full h-full object-cover" alt="main-image" /> */}
                    <img
                      src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2560,h_1769/http://wordpress.actionengineers.com/wp-content/uploads/2021/09/action-building-scaled.jpg"
                      className="w-full h-full "
                      alt="main-image"
                    />
                  </div>
                  <p className="xs:w-full xs:px-6 text-white font-display text-7xl text-center font-bold lg:w-4/5 lg:px-14 lg:leading-normal">
                    {/* {item.text} */}
                    Calibrated today will set a precise future
                  </p>
                  {/* <img
                    src="/images/a-vector.png"
                    className="h-1/2 lg:h-full object-contain absolute bottom-0 right-0 z-1"
                  /> */}
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

import React from 'react';

export const FestTrips = () => {
  return (
    <section className="w-full mx-auto mb-14 md:float-left relative ft-images-wrapper">
      <div className="2xl:max-w-7xl 2xl:mx-auto 2xl:px-8 w-full flex justify-start items-center relative">
        <div className="ft-image-block">
          <div data-aos="zoom-in" className="ft-image-cont flex justify-center items-center">
            <a href="#">Festivals & Celebrations</a>
            <img src="/images/Festivals.png" />
          </div>
          <div data-aos="zoom-in" className="ft-image-cont flex justify-center items-center">
            <a href="#">Office trips</a>
            <img src="/images/Trips.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

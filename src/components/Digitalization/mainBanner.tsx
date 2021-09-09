import React from 'react';

export const ImgContainer = () => {
  return (
    <section
      data-aos="zoom-in"
      style={{
        backgroundImage: 'url(/images/digitalization-banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
      }}
      className="w-full flex justify-between items-center image-container"
    >
      <div className="max-w-7xl w-full mx-auto md:h-full flex justify-start items-center px-4 sm:px-6 lg:px-8 md:justify-start">
        <div className="digi-title-bg">
          <div className="title-text">
            <h1 className="head-line" data-aos="fade-right">
              Digitalization
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

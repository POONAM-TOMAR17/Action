import React from 'react';

export const ImgContainer = () => {
  return (
    <section
      data-aos="zoom-in"
      style={{
        backgroundImage: 'url(/images/about-us-banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      className="w-full flex justify-between items-center image-container"
    >
      <div className="max-w-7xl w-full mx-auto h-full flex justify-end items-center px-4 sm:px-6 lg:px-8 md:justify-end relative">
        <h1 className="head-line" data-aos="fade-right">
          What we do
        </h1>
        <div className="patch-img" />
      </div>
    </section>
  );
};

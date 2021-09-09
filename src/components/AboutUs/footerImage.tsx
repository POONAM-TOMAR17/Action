import React from 'react';

export const FooterImage = () => {
  return (
    <section className="w-full mx-auto my-14 md:float-left relative flex items-center justify-center">
      <img
        src="/images/about-footer-img.png"
        alt="work-with-us"
        className="footer-banner"
        data-aos="fade-right"
      />
      <div className="max-w-7xl w-full h-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-start items-center flex-wrap absolute top-0">
        <div data-aos="zoom-out" className="h-full flex justify-center items-center">
          &nbsp;
        </div>
      </div>
    </section>
  );
};

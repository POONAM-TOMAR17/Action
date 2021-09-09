import React from 'react';

export const FooterImage = () => {
  return (
    <section
      className="w-full mx-auto mt-14 md:float-left relative flex items-normal justify-center cr-footer-img"
      data-aos="fade-in"
    >
      <div className="max-w-7xl w-full h-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-start items-center flex-wrap">
        <div className="h-full flex justify-center items-center" data-aos="zoom-in">
          <div className="cr-footer-text">
            <h4>
              Hey! still looking for something? Write to us,
              <br />
              <a href="mailto:contact@actonate.com">@contact@actonate.com</a>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

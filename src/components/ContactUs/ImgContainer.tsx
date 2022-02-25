import React from 'react';

const ImgContainer = () => {
  return (
    <section className="w-full lg:h-full flex justify-between items-center overflow-hidden mb-5">
      <div className="w-full lg:h-full flex justify-start items-center flex-wrap lg:justify-start relative">
        <div
          style={{ height: '296px' }}
          className="w-full h-full flex items-center justify-center relative top-image"
        >
          <div className="w-full h-full absolute top-0 left-0 z-1">
            <img
              src="http://wordpress.actionengineers.com/wp-content/uploads/2021/07/contact.jpg"
              alt="contact-us"
              className="absolute left-0 top-0 w-full h-full object-cover z-1"
            />
          </div>

          <p className="text-5xl font-semibold uppercase text-white">Get In Touch</p>
          <div className="absolute bottom-10 left-0 w-full">
            <div className="w-full flex items-center justify-start xs:px-4 lg:px-8 lg:container lg:mx-auto">
              <a
                href="/"
                className="uppercase text-customColors-400 text-xs font-medium tracking-loose hover:underline"
              >
                Home
              </a>
              <span className="uppercase text-customColors-400 text-xs mx-2">/</span>
              <p className="uppercase text-customColors-400 text-xs font-bold tracking-loose">
                Contact Us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImgContainer;

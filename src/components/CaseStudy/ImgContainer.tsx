import React from 'react';

interface IImgContainerProps {
  name: string;
  img: string;
}

const ImgContainer = (props: IImgContainerProps) => {
  const { name, img } = props;
  return (
    <section className="w-full lg:h-full flex justify-between items-center overflow-hidden mb-5">
      <div className="w-full lg:h-full flex justify-start items-center flex-wrap lg:justify-start relative">
        <div className="w-full h-full flex items-center justify-center relative top-image">
          <div className="w-full h-full absolute top-0 left-0 z-1">
            <img src={img} alt={name} className="w-full h-full object-cover z-1" />
            <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-60" />
          </div>
          <img
            src="/images/a-vector.png"
            className="xs:h-1/2 xs:transform xs:translate-x-36 lg:h-4/5 absolute lg:translate-x-0 lg:right-0 bottom-0 z-1"
          />
          <div className="w-full flex flex-wrap items-center justify-start xs:text-xl lg:text-3xl text-white font-semibold  xs:px-4 lg:px-8 lg:container lg:mx-auto">
            <div className="w-full flex flex-row xs:items-start lg:items-center justify-start xs:mb-8 lg:mb-10">
              <a
                href="/case-study"
                className="font-light tracking-widest outline-none shadow-none focus:outline-none focus:shadow-none"
              >
                Case Study
              </a>
              <span className="font-light mx-2">|</span>
              <p className="tracking-widest">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImgContainer;

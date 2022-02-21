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
        <div
          style={{ height: '296px' }}
          className="w-full h-full flex items-center justify-center relative top-image"
        >
          <div className="w-full h-full absolute top-0 left-0 z-1">
            <img src={img} alt={name} className="w-full h-full object-cover z-1" />
            <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-60" />
          </div>
          {/* <img
            src="/images/a-vector.png"
            className="xs:h-1/2 xs:transform xs:translate-x-36 lg:h-full absolute lg:translate-x-0 lg:right-0 bottom-0 z-1"
          /> */}
          <div className="flex flex-row items-center justify-centet text-5xl text-white font-semibold xs:px-4 lg:px-8">
            {/* <span className="mr-3 font-light xs:hidden lg:inline-block"> Solutions |</span> */}
            {name}
          </div>
          <div className="absolute bottom-10 left-0 w-full">
            <div className="w-full flex items-center justify-start xs:px-4 lg:px-8 lg:container lg:mx-auto">
              {/* <a
                href="/"
                className="uppercase text-customColors-400 text-xs font-medium tracking-loose hover:underline"
              >
                Home
              </a>
              <span className="uppercase text-customColors-400 text-xs mx-2">/</span> */}
              <p className="xs:hidden lg:block uppercase text-customColors-400 text-xs font-bold tracking-loose">
                {name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImgContainer;

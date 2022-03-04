import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const MainText = styled.p`
   {
    font-size: 32px;
    line-height: 48px;
    font-style: normal;
    font-weight: bold;
  }
`;
export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20px'
      }
    }
  ]
};
const clienticon = [
  {
    imgsrc: '/images/clients/abb.png'
  },
  {
    imgsrc: '/images/clients/ABG.png'
  },
  {
    imgsrc: '/images/clients/lnt.png'
  },
  {
    imgsrc: '/images/clients/siemens.png'
  },
  {
    imgsrc: '/images/clients/TATA.png'
  },
  {
    imgsrc: '/images/clients/reliance.png'
  },
  {
    imgsrc: '/images/clients/ntpc.png'
  },
  {
    imgsrc: '/images/clients/bombardier.png'
  },
  {
    imgsrc: '/images/clients/alembic.png'
  },
  {
    imgsrc: '/images/clients/Ratnamani 2.png'
  },
  {
    imgsrc: '/images/clients/gail.png'
  },
  {
    imgsrc: '/images/clients/bhel.png'
  },
  {
    imgsrc: '/images/clients/Alstom 2.png'
  },
  {
    imgsrc: '/images/clients/railways.png'
  },
  {
    imgsrc: '/images/clients/rrkabel.png'
  },
  {
    imgsrc: '/images/clients/gujrat-board.png'
  },
  {
    imgsrc: '/images/clients/thermax.png'
  },
  {
    imgsrc: '/images/clients/fertilizer.png'
  },
  {
    imgsrc: '/images/clients/windar.png'
  },
  {
    imgsrc: '/images/clients/GMM.png'
  },
  {
    imgsrc: '/images/clients/ongc 1.png'
  },
  {
    imgsrc: '/images/clients/PnT.png'
  },
  {
    imgsrc: '/images/clients/gadre.png'
  },
  {
    imgsrc: '/images/clients/fives-logo 1.png'
  },
  {
    imgsrc: '/images/clients/wind-power.png'
  }
];

const OurClients = () => {
  return (
    <section className="w-full pt-10 h-full flex justify-start items-start flex-col xs:px-4 lg:px-8 mb-14 lg:container lg:mx-auto">
      <div className="w-4/5 flex justify-start items-start flex-col space-y-4">
        <p className="text-sm uppercase tracking-widest font-montserrat text-customColors-200 mt-4">
          Our Clients
        </p>
        <MainText className="font-montserrat text-3xl text-black-100  font-bold tracking-relaxed leading-snug ">
          Our Clients
        </MainText>
      </div>
      <div className="w-full grid xs:grid-cols-3 xs:gap-3 lg:grid-cols-5 lg:gap-15 xs:pt-5 lg:pt-10">
        {clienticon.map((icon) => (
          <div key={icon.imgsrc} className="w-full flex items-left justify-left overflow-hidden ">
            <div className="xs:w-4/5 lg:w-1/2 flex items-left justify-left overflow-hidden">
              <img
                // src="/images/clients/abb.png"
                src={icon.imgsrc}
                alt="Siemens"
                className="w-full h-full "
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        ))}
      </div>
      {/* MOBILE */}
      {/* <div className="w-full">
        <div className=" w-full">
          <div className="block ">
            <Slider {...settings} className="main-slider-d">
              {clienticon?.map((icon) => {
                return (
                  <div className="w-full">
                    <div className="w-full grid xs:grid-cols-3 xs:gap-3 lg:grid-cols-5 lg:gap-15 xs:pt-5 lg:pt-10">
                      {clienticon.map((icon) => (
                        <div
                          key={icon.imgsrc}
                          className="w-full flex items-left justify-left overflow-hidden "
                        >
                          <div className="xs:w-4/5 lg:w-1/2 flex items-left justify-left overflow-hidden">
                            <img
                              src={icon.imgsrc}
                              alt="Siemens"
                              className="w-full h-full "
                              style={{ objectFit: 'contain' }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default OurClients;

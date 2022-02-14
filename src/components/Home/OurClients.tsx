import React from 'react';
import styled from 'styled-components';

const MainText = styled.p`
   {
    font-size: 32px;
    line-height: 48px;
    font-style: normal;
    font-weight: bold;
  }
`;
const OurClients = () => {
  return (
    <section className="w-full h-full flex justify-start items-start flex-col xs:px-4 lg:px-8 mb-14 lg:container lg:mx-auto">
      <div className="w-4/5 flex justify-start items-start flex-col space-y-4">
        <p className="text-sm uppercase tracking-widest text-customColors-200 mt-4">Our Clients</p>
        <MainText className=" text-3xl text-black-100 font-display font-bold tracking-relaxed leading-snug ">
          Our Clients
        </MainText>
      </div>
      <div className="w-full grid xs:grid-cols-3 xs:gap-3 lg:grid-cols-5 lg:gap-15 xs:pt-5 lg:pt-10">
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/abb.png"
              alt="Siemens"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/ABG.png"
              alt="Maruti Suzuki"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/lnt.png"
              alt="VisualBi Technology"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-1/2 lg:w-2/5 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/siemens.png"
              alt="OneZoey"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/TATA.png"
              alt="OneZoey"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/reliance.png"
              alt="Vasu Healthcare"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-1/2 lg:w-2/5 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/ntpc.png"
              alt="Lets Shave"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="w-3/5 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/bombardier.png"
              alt="Thrill Ophilia"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="w-1/3 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/alembic.png"
              alt="Hue"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="w-1/3 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/Ratnamani 2.png"
              alt="TrueMind Capital"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/gail.png"
              alt="Grofers"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/bhel.png"
              alt="Divya Bhaskar"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/Alstom 2.png"
              alt="Divya Bhaskar"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/railways.png"
              alt="Divya Bhaskar"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/rrkabel.png"
              alt="Divya Bhaskar"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/gujrat-board.png"
              alt="Divya Bhaskar"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/thermax.png"
              alt="Divya Bhaskar"
              className="w-full h-full object-contain"
            />
          </div>
        </div>{' '}
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/fertilizer.png"
              alt="Divya Bhaskar"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/windar.png"
              alt="Divya Bhaskar"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/GMM.png"
              alt="Divya Bhaskar"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/ongc 1.png"
              alt="Divya Bhaskar"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/PnT.png"
              alt="Divya Bhaskar"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/gadre.png"
              alt="Divya Bhaskar"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/fives-logo 1.png"
              alt="Divya Bhaskar"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center overflow-hidden ">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/wind-power.png"
              alt="Divya Bhaskar"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;

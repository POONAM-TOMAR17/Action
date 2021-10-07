import React from 'react';
import MainBlock from './MainBlock';
import MobileTeamSlider from './MobileTeamSlider';
import TeamSlider from './TeamSlider';

interface IOurTeam {
  isMobile: boolean;
}

const OurTeam = (props: IOurTeam) => {
  const { isMobile } = props;
  return (
    <section className="w-full flex justify-start items-center flex-wrap mt-10">
      <div className="w-full flex items-center justify-between xs:px-4 lg:px-8 mb-5 lg:container lg:mx-auto">
        <div className="w-full lg:w-4/5 flex justify-start items-start flex-col space-y-4">
          <p className="text-sm uppercase tracking-widest text-customColors-200 mt-4">Our Team</p>
          <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
            People of Actonate
          </p>
        </div>
      </div>
      <div className="w-full xs:h-52 lg:h-auto flex xs:justify-center xs:items-center lg:items-start lg:justify-start xs:mb-5 lg:mb-14">
        <img
          src="/images/our-team-banner.jpg"
          alt="our-team"
          className="w-full h-full xs:object-cover lg:object-contain"
        />
      </div>
      <div className="w-full flex items-center justify-between xs:px-4 lg:px-8 xs:mb-14 lg:mb-28 lg:container lg:mx-auto lg:z-10">
        <MainBlock />
      </div>
      <div className="w-full flex flex-col items-start justify-start">
        {!isMobile ? <TeamSlider /> : <MobileTeamSlider />}
      </div>
    </section>
  );
};

export default OurTeam;

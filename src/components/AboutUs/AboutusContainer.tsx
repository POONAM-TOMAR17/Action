import AccreditationSection from '../../components/AboutUs/AccreditationSection';
import React, { Fragment } from 'react';

import ImgContainer from './ImgContainer';
// import ListStudies from './LandingPage/ListStudies';
// import MainContents from './MainContents';
// import OverView from './OverView';
// import OurTeam from '../AboutUs/OurTeam/OurTeam';
import OurTeamSection from '../../components/AboutUs/OurTeamSection';
import QualityPolicySection from '../../components/AboutUs/QualityPolicysection';
// import OurHistorySection from '../../components/AboutUs/ourHistorySection';
import { aboutusArray } from './AboutusArray';
import { AboutusInnerType } from '../../components/libs/typeInterface';
import OurHistorySection from './OurHistorySection';

interface IAboutusContainerProps {
  width: number;
  params: string;
}

const AboutusContainer = (props: IAboutusContainerProps) => {
  const { params } = props;
  const filteredArray = aboutusArray.filter((item) => item.id === params);
  // console.log('checkingg url', window.location.pathname);
  return (
    <>
      {filteredArray &&
        filteredArray.length > 0 &&
        filteredArray.map((item: AboutusInnerType, index: number) => {
          var currentIndex = aboutusArray.findIndex((itemNew) => itemNew.id === item.id);
          let newIndex: number;
          if (currentIndex === aboutusArray.length - 1) {
            newIndex = 0;
          } else {
            newIndex = currentIndex + 1;
          }
          return (
            <Fragment key={index}>
              <ImgContainer name={item.name} img={item.bannerImg} />
              {window.location.pathname === '/aboutus/our-history' && <OurHistorySection />}
              {window.location.pathname === '/aboutus/accreditation' && <AccreditationSection />}
              {window.location.pathname === '/aboutus/our-team' && <OurTeamSection />}
              {window.location.pathname === '/aboutus/quality-policy' && (
                <QualityPolicySection features={item.features} />
              )}
            </Fragment>
          );
        })}
    </>
  );
};

export default AboutusContainer;

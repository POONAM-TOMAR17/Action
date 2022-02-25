import MobileTeamSlider from '../AboutUs/OurTeam/MobileTeamSlider';
import TeamSlider from '../AboutUs/OurTeam/TeamSlider';
import { useState } from '@hookstate/core';
import React from 'react';
import Select from 'react-select';
import { ButtonArrow } from '../../../static/svg/ButtonArrow';
import { InquiryOptions } from '../../components/constants';
import { DropdownIndicator } from '../../components/libs/selectDropdownArrow';

interface IMobileMap {
  isMobile?: boolean;
}

const MobileMap = (props: IMobileMap) => {
  // const {} = props;
  const isHelp = useState(null);

  // tslint:disable-next-line: no-any
  const onChangeHandle = (selectedOption: any) => {
    isHelp.set(selectedOption);
  };
  const { isMobile } = props;
  return (
    <>
      <div className="w-full h-full lg:flex justify-between items-top  mb-20 lg:justify-start lg:container lg:mx-auto">
        <section className="w-1/4 h-full flex justify-between items-center xs:px-4 lg:px-8 mb-5 lg:justify-start lg:container lg:mx-auto">
          <form action="" name="contact_form" method="post">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="380"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Action%20engineers&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                ></iframe>
                <a href="https://fmovies-online.net"></a>
                <br></br>
                <style>.mapouter</style>
                <a href="https://www.embedgooglemap.net">custom google maps embed</a>
                <style>.gmap_canvas </style>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default MobileMap;

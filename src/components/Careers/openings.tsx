import React from 'react';
import { AndroidDev } from '../Careers/androidDev';
import { BusinessDev } from '../Careers/businessDev';
import { FullStackDev } from '../Careers/fullStackDev';
import { GraphicsDes } from '../Careers/graphicsDes';
import { UixDes } from '../Careers/uixDes';

export const Openings = () => {
  return (
    <section className="w-full mx-auto my-14 md:h-full flex justify-start items-start md:justify-start">
      <div className="max-w-7xl w-full mx-auto flex justify-start items-start px-4 sm:px-6 lg:px-8 md:justify-start flex-wrap">
        <h4 className="cr-section-title" data-aos="zoom-in-right">
          CURRENT OPENINGS
        </h4>
        <div className="w-full flex justify-start items-start flex-wrap">
          <FullStackDev />
          <BusinessDev />
          <AndroidDev />
          <GraphicsDes />
          <UixDes />
        </div>
      </div>
    </section>
  );
};

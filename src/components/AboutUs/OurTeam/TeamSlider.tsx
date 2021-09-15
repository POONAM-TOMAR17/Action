import Flicking from '@egjs/react-flicking';
import React from 'react';
import { teamList } from '../../../components/constants';

const TeamSlider = () => {
  // tslint:disable-next-line: no-any
  const updateTransform = (e: any) => {
    // tslint:disable-next-line: no-any
    e.currentTarget.panels.forEach((panel: any) => {
      const rotateVal = -panel.progress * 20;
      const sinRot = Math.sin(Math.abs((rotateVal * Math.PI) / 180));
      const depth = 900 * sinRot * sinRot;
      panel.element.style.transform = `translateY(-${depth}px) rotateY(${rotateVal}deg)`;
    });
  };

  return (
    <>
      <div className="w-full team-slider">
        <Flicking
          moveType="freeScroll"
          align="prev"
          onReady={updateTransform}
          onMove={updateTransform}
          bound
          preventClickOnDrag
          resizeOnContentsReady
        >
          {teamList.map((item, index) => (
            <div key={index} className="team-block">
              <div className="w-full flex items-center justify-center flex-wrap">
                <div className="w-full flex items-center justify-start">
                  <img src={item.image} alt="user-2" className="w-full h-full object-contain" />
                </div>
                <div className="w-full flex items-start justify-end">
                  <div className="flex-1 p-5 shadow-md bg-white flex flex-col items-start justify-start transform -translate-y-10 translate-x-10">
                    <p className="text-lg font-medium lg:mb-3">{item.name}</p>
                    <p className="text-sm italic lg:mb-3">{item.designation}</p>
                    <p className="w-1/2 text-sm font-light text-customColors-100 lg:mb-3">
                      {item.jobDescrption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Flicking>
      </div>
    </>
  );
};

export default TeamSlider;

import Flicking from '@egjs/react-flicking';
import React from 'react';
import { teamList } from '../../../components/constants';

const MobileTeamSlider = () => {
  return (
    <>
      <div className="w-full team-slider">
        <Flicking
          bound
          renderOnlyVisible
          align="next"
          inputType={['pointer']}
          style={{ minHeight: '561px' }}
        >
          {teamList.map((item, index) => (
            <div key={index} className="team-block">
              <div className="w-full flex items-center justify-center flex-wrap">
                <div className="w-full flex items-center justify-start">
                  <img src={item.image} alt="user-2" className="w-full h-full object-contain" />
                </div>
                <div className="w-full flex items-start justify-end">
                  <div className="flex-1 p-5 shadow-md bg-white flex flex-col items-start justify-start transform -translate-y-10 translate-x-10">
                    <p className="text-lg font-medium mb-3">{item.name}</p>
                    <p className="text-sm italic mb-3">{item.designation}</p>
                    <p className="xs:w-full lg:w-1/2 text-sm font-light text-customColors-100 mb-3">
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

export default MobileTeamSlider;

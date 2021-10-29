import { useState } from '@hookstate/core';
import React from 'react';
import { Collapse } from 'react-collapse';
import { ArrowRight } from '../../../static/svg/ArrowRight';
import { openingList } from '../../components/constants';

const Openings = () => {
  const openedRole = useState('');

  const handleOpen = (id: string) => {
    if (openedRole.get() === '' || openedRole.get() !== id) {
      openedRole.set(id);
    } else {
      openedRole.set('');
    }
  };
  return (
    <>
      <section className="w-full h-full flex justify-between items-center xs:px-4 lg:px-8 xs:mb-5 lg:mb-14 lg:justify-start lg:container lg:mx-auto">
        <div className="w-full lg:w-4/5 flex justify-start items-start flex-col space-y-4">
          <p className="text-sm uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
            Career at Actonate
          </p>
          <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
            Work with us
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl fringilla
            nec arcu est. Penatibus imperdiet id elit nec, odio in tristique.
          </p>
          <div className="xs:w-full lg:w-1/2 flex flex-col divide-y">
            {openingList.map((item, index) => {
              return (
                <div key={index} className="w-full flex flex-col py-4">
                  <a
                    onClick={() => handleOpen(item.id)}
                    className="text-base font-medium cursor-pointer flex items-center justify-between"
                  >
                    <p
                      className={`${
                        openedRole.get() === item.id
                          ? 'text-customColors-600'
                          : 'text-footerBackground'
                      }`}
                    >
                      {item.name}
                    </p>
                    <p className="w-5 h-5 text-primary border rounded-full border-black flex items-center justify-center relative">
                      <span className="w-3 bg-black rounded-full" style={{ height: '2px' }} />
                      <span
                        style={{ height: '2px' }}
                        className={`absolute w-3 bg-black rounded-full transform duration-300${
                          openedRole.get() === item.id ? ' rotate-0' : ' rotate-90'
                        }`}
                      />
                    </p>
                  </a>
                  <Collapse isOpened={openedRole.get() === item.id}>
                    <div className="w-full mt-4">
                      <div className="w-full flex justify-start items-center flex-nowrap space-x-20">
                        <p>Position: {item.openings}</p>
                        <p>Experience: {item.experience}</p>
                      </div>
                      <div className="w-full flex justify-start items-center flex-wrap space-y-2 mt-3">
                        <p className="font-medium">Criteria</p>
                        <p>{item.criteria}</p>
                      </div>
                      <div className="w-full flex justify-start items-center mt-3">
                        <a
                          href={`/apply?pos=${item.id}`}
                          className="flex items-center justify-center border border-customColors-500 text-customColors-500 px-4 py-1 rounded-sm transform transition-all duration-300 hover:bg-customColors-500 hover:text-white cs-readmore cursor-pointer text-sm"
                        >
                          Apply
                          <ArrowRight className="w-3 h-3 ml-2" />
                        </a>
                      </div>
                    </div>
                  </Collapse>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Openings;

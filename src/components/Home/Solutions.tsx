import React from 'react';
import { solutionsArray } from '../../components/constants';
import { SolutionsType } from '../../components/libs/typeInterface';

const Solutions = () => {
  return (
    <section className="w-full flex justify-center items-center bg-customBackground-300 mb-5">
      <div className="w-full flex justify-start items-start flex-wrap xs:px-4 lg:px-8 lg:py-10 lg:justify-start lg:container lg:mx-auto">
        <div className="w-full flex justify-start items-start flex-col space-y-4">
          <p className="text-sm uppercase tracking-widest text-customColors-200">
            Service We Offer
          </p>
          <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
            Solutions through services
          </p>
        </div>
        <div className="w-full mt-7">
          <div className="w-full grid grid-cols-3 gap-20">
            {solutionsArray.map((item: SolutionsType, index: number) => (
              <div
                key={index}
                className="w-full flex items-center justify-center flex-wrap space-y-6"
              >
                <div className="w-4/5 flex items-center justify-center overflow-hidden hover01">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <p className="w-full text-center text-3xl font-light text-customColors-100">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

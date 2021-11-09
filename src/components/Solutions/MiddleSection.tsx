import React from 'react';
import { SolutionServicesType } from '../libs/typeInterface';

interface IBenefitsProps {
  title?: string;
  description?: string;
  services: SolutionServicesType[];
  title2?: string;
  description2?: string;
}

const Benefits = (props: IBenefitsProps) => {
  const { title, description, services, title2, description2 } = props;
  return (
    <section className="w-full h-full flex justify-between items-center xs:px-4 lg:px-8 xs:mb-5 lg:mb-10 lg:justify-start lg:container lg:mx-auto">
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-start items-start flex-col space-y-4">
          {/* <p className="text-sm uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
            Benefits
          </p> */}
          <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
            {title}
          </p>
          {description && (
            <div
              className="w-full text-base space-y-3"
              dangerouslySetInnerHTML={{ __html: description || '' }}
            />
          )}
        </div>
        <div className="w-full grid xs:grid-cols-1 lg:grid-cols-2 xs:gap-5 lg:gap-10 mt-10 items-start">
          {services &&
            services.length > 0 &&
            services.map((item: SolutionServicesType, index: number) => (
              <div
                key={index}
                className="w-full flex items-start justify-start flex-wrap space-y-4"
              >
                {item.img !== '' && (
                  <div className="w-full h-48 flex itmes-center justify-center">
                    <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                )}
                {item.name !== '' && (
                  <div className="w-full flex items-start justify-start">
                    <p className="text-lg font-semibold">{item.name}</p>
                  </div>
                )}
                <div className="w-full flex items-start justify-start">
                  <p
                    className="w-full text-base"
                    dangerouslySetInnerHTML={{ __html: item.desc || '' }}
                  />
                </div>
                {item.list && item.list.length > 0 && (
                  <ul className="w-full list-inside list-disc ml-5">
                    {item.list?.map((i: string, k: number) => (
                      <li key={k}>{i}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </div>
        <div className="w-full flex justify-start items-start flex-col space-y-4 mt-10">
          {title2 !== '' && (
            <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
              {title2}
            </p>
          )}
          {description2 !== '' && (
            <div
              className="w-full text-base space-y-3"
              dangerouslySetInnerHTML={{ __html: description2 || '' }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

import React from 'react';

interface IOverViewProps {
  labelText: string;
  title: string;
  description: string;
  category: string;
  customer: string;
  location: string;
  year: number;
}

const OverView = (props: IOverViewProps) => {
  const { labelText, title, description, category, customer, location, year } = props;
  return (
    <section className="w-full flex justify-between items-center xs:px-4 lg:px-8 xs:mb-5 lg:mb-10 lg:justify-start lg:container lg:mx-auto relative">
      <div className="w-full flex justify-start items-start flex-col space-y-4">
        {labelText && labelText !== '' && (
          <p className="text-sm uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
            {labelText}
          </p>
        )}
        {title && title !== '' && (
          <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
            {title}
          </p>
        )}
        <div className="w-full flex flex-row space-x-5">
          <div className="relative flex flex-col py-4 bg-customBackground-300 pr-5">
            <div className="absolute transform lg:-translate-x-full left-0 top-0 w-screen h-full bg-customBackground-300 z-1" />
            <div className="w-full flex flex-col space-y-1">
              <p className="font-light">
                Category<span className="font-semibold">: {category}</span>
              </p>
              <p className="font-light">
                Customer<span className="font-semibold">: {customer}</span>
              </p>
              <p className="font-light">
                Location<span className="font-semibold">: {location}</span>
              </p>
              <p className="font-light">
                Year<span className="font-semibold">: {year}</span>
              </p>
            </div>
          </div>
          {description && description !== '' && (
            <div
              className="flex-1 text-lg space-y-3"
              dangerouslySetInnerHTML={{ __html: description || '' }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default OverView;

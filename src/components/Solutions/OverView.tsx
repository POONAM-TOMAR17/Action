import React from 'react';

interface IOverViewProps {
  title: string;
  description: string;
}

const OverView = (props: IOverViewProps) => {
  const { title, description } = props;
  return (
    <section className="w-full h-full flex justify-between items-center xs:px-4 lg:px-8 xs:mb-5 lg:mb-10 lg:justify-start lg:container lg:mx-auto">
      <div className="w-full flex justify-start items-start flex-col space-y-4">
        <p className="text-sm uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
          About
        </p>
        <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
          {title}
        </p>
        <div
          className="text-lg space-y-3"
          dangerouslySetInnerHTML={{ __html: description || '' }}
        />
      </div>
    </section>
  );
};

export default OverView;

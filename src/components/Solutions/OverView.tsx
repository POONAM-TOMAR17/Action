import React from 'react';

interface IOverViewProps {
  labelText: string;
  title: string;
  description: string;
}

const OverView = (props: IOverViewProps) => {
  const { labelText, title, description } = props;
  return (
    <section className="w-full flex justify-between items-center xs:px-4 lg:px-8 xs:mb-5 lg:mb-10 lg:justify-start lg:container lg:mx-auto">
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
        {description && description !== '' && (
          <div
            className="text-sm text-customColors-800 leading-6 lg:pt-10 space-y-3"
            dangerouslySetInnerHTML={{ __html: description || '' }}
          />
        )}
      </div>
    </section>
  );
};

export default OverView;

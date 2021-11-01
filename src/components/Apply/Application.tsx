import React from 'react';
import ApplyForm from './ApplyForm';

interface IApplicationProps {
  name: string;
}

const Application = (props: IApplicationProps) => {
  const { name } = props;
  return (
    <section className="w-full h-full flex justify-between items-center xs:px-4 lg:px-8 xs:mb-10 lg:mb-15 flex-wrap lg:justify-start lg:container lg:mx-auto">
      <div className="w-full lg:w-4/5 flex justify-start items-start flex-col space-y-4">
        <p className="text-sm uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
          Application
        </p>
        <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
          Apply for this job
        </p>
      </div>
      <div className="w-full flex justify-start items-start flex-col space-y-4">
        <p className="text-base font-light text-customColors-200 mt-6 lg:mt-4">
          Please add all the required informations for this job application, and we will revert back
          within a week
        </p>
        <div className="w-full">
          <ApplyForm name={name} />
        </div>
      </div>
    </section>
  );
};

export default Application;

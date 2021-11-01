import React from 'react';
import RequirementsData from './RequirementsData';

interface IRequirementsProps {
  jobRole: string[][];
  duties: string[][];
}

const Requirements = (props: IRequirementsProps) => {
  const { jobRole, duties } = props;
  return (
    <section className="w-full h-full flex justify-between items-center xs:px-4 lg:px-8 mb-5 flex-wrap lg:justify-start lg:container lg:mx-auto">
      <div className="w-full lg:w-4/5 flex justify-start items-start flex-col space-y-4">
        <p className="text-sm uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
          Requirements
        </p>
        <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
          Job Role
        </p>
      </div>
      <div className="w-full flex justify-start items-start flex-col space-y-4 mt-3">
        <RequirementsData data={jobRole} />
      </div>

      {/* Responsibility */}
      <div className="w-full lg:w-4/5 flex justify-start items-start flex-col space-y-4 xs:mt-8 lg:mt-12">
        <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
          Responsibility & Duties
        </p>
      </div>
      <div className="w-full flex justify-start items-start flex-col space-y-4 mt-3">
        <RequirementsData data={duties} />
      </div>
    </section>
  );
};

export default Requirements;

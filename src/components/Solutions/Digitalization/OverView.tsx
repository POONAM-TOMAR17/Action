import React from 'react';

const OverView = () => {
  return (
    <section className="w-full h-full flex justify-between items-center xs:px-4 lg:px-8 xs:mb-5 lg:mb-10 lg:justify-start lg:container lg:mx-auto">
      <div className="w-full lg:w-4/5 flex justify-start items-start flex-col space-y-4">
        <p className="text-sm uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
          About
        </p>
        <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
          What is Digitalization?
        </p>
        <p className="text-lg">
          Digitalization is the process of converting physical means of information like paper
          documents, signatures to their digital equivalents. The first step towards automation is
          to convert the paper trail in your organization to an evolved digitized trail that is
          shareable, measure-able and auditable. Most medium and large enterprises today have
          migrated to an ERP or CRM driven solution for digitalization but still rely on manual
          processes for items outside the purview or feature gaps of the ERP or CRM tool.
        </p>
      </div>
    </section>
  );
};

export default OverView;

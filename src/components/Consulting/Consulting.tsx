import { useState } from '@hookstate/core';
import React from 'react';

interface IConsulting {
  isMobile?: boolean;
}

const Consulting = (props: IConsulting) => {
  const {} = props;
  const isHelp = useState(null);

  // tslint:disable-next-line: no-any
  const onChangeHandle = (selectedOption: any) => {
    isHelp.set(selectedOption);
  };

  return (
    <>
      <div className="w-full h-full xs:p-6 lg:p-0 lg:pt-6 lg:flex justify-between items-top  pt-20 pb-10 lg:justify-start lg:container lg:mx-auto">
        <section className=" h-full flex  items-center lg:justify-start  lg:mx-auto">
          <form action="" name="contact_form" method="post">
            <p className="pt-6 text-sm font-normal text-customColors-800 leading-7">
              A multimeter is a measuring instrument that can measure multiple electrical
              properties. A typical multimeter can measure voltage, resistance, and current, in
              which case it is also known as a volt-ohm-milliammeter (VOM).
            </p>
          </form>
        </section>
      </div>
    </>
  );
};

export default Consulting;

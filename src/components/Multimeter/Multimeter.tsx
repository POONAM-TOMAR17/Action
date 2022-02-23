import { useState } from '@hookstate/core';
import React from 'react';

interface IMultimeter {
  isMobile?: boolean;
}

const Multimeter = (props: IMultimeter) => {
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
            <p className=" text-sm font-normal text-customColors-800 leading-7 ">
              Analog multimeters use a microammeter with a moving pointer to display readings.
              Digital multimeters (DMM, DVOM) have numeric displays and have made analog multimeters
              obsolete as they are cheaper, more precise, and more physically robust than analog
              multimeters.
            </p>
            <div className="w-full grid xs:grid-cols-1 lg:grid-cols-2 xs:gap-5 lg:gap-x-10 lg:gap-y-8">
              <div className="w-full xs:hidden lg:flex items-center justify-center flex-wrap" />

              <div className="w-full xs:hidden lg:flex items-center justify-center flex-wrap" />
            </div>
          </form>
        </section>
        <section className="w-1/4 h-full flex justify-between items-center xs:px-4 lg:px-8 mb-5 lg:justify-start lg:container lg:mx-auto">
          <form action="" name="contact_form" method="post">
            <img
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300/http://wordpress.actionengineers.com/wp-content/uploads/2021/08/multimeter-300x300.jpg"
              alt="multimeter"
              className="w-full h-full object-cover"
            />
            <div className="w-full xs:hidden lg:flex items-center justify-center flex-wrap" />

            <div className="w-full xs:hidden lg:flex items-center justify-center flex-wrap" />
            {/* </div> */}
          </form>
        </section>
      </div>
    </>
  );
};

export default Multimeter;

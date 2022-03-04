import React from 'react';

const OverView = () => {
  return (
    <section className="w-full h-full flex justify-between items-center xs:px-4 lg:px-8 mb-5 lg:justify-start lg:container lg:mx-auto">
      <div className="w-full mt-8 lg:w-4/5 flex justify-start items-start flex-col space-y-4">
        <div className="text-sm text-customColors-800 flex-col flex gap-y-6 font-ptsans">
          <p className="">
            Action Engineers was established in 1987 as the first organized, professional Instrument
            Engineering center in Gujarat catering to the re-furbishing of industrial instruments.
          </p>
          <p>
            After the introduction of ISO-9000 standards in the ’90s (which we successfully met with
            industry requirements of instrument calibration), our facilities were then approved by
            ABB, BHEL, CROMPTON, L&T, IPCL, etc.
          </p>
          <p>
            Fast forward to now and we have more than 1000 companies which are ISO – certified with
            our perennial support of calibration to National & International Standards.
          </p>
          <p>
            Over the years we have expanded our activities to cover the entire industrial
            instrumentation field in Supply, Refurbishing, Calibration, Validation & Training to a
            One-Stop-Solution to all instrumentation needs of industries. We have built a reputation
            with various industries where we handled our customers’ needs effectively and
            efficiently.
          </p>
          <p>
            Also, we are now NABL accredited LAB following standard ISO /IEC 17025-2005 for
            Electrotech, Mechanicals including pressure and thermal instruments which further
            fortifies our emphasis on trust, quality, and performance.
          </p>
          <p>
            Our organization believes in leading from the front and we strive to become the world’s
            leading brand in the near future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverView;

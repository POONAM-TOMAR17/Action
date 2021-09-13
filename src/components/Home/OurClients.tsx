import React from 'react';

const OurClients = () => {
  return (
    <section className="w-full h-full flex justify-start items-start flex-col xs:px-4 lg:px-8 mb-14 lg:container lg:mx-auto">
      <div className="w-4/5 flex justify-start items-start flex-col space-y-4">
        <p className="text-sm uppercase tracking-widest text-customColors-200 mt-4">Our Clients</p>
        <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
          People we have woked with
        </p>
      </div>
      <div className="w-full grid xs:grid-cols-3 xs:gap-3 lg:grid-cols-4 lg:gap-15 xs:pt-5 lg:pt-10">
        <div className="w-full flex items-center justify-center overflow-hidden oc-img">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/siemens.png"
              alt="Siemens"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-center overflow-hidden oc-img">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/maruti-suzuki.png"
              alt="Maruti Suzuki"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-center overflow-hidden oc-img">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/visualbi.png"
              alt="VisualBi Technology"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-center overflow-hidden oc-img">
          <div className="xs:w-1/2 lg:w-2/5 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/one-zoey.png"
              alt="OneZoey"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-center overflow-hidden oc-img">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/sapna.png"
              alt="Sapna Book Store"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-center overflow-hidden oc-img">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/vasu.png"
              alt="Vasu Healthcare"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-center overflow-hidden oc-img">
          <div className="xs:w-1/2 lg:w-2/5 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/lets-shave.png"
              alt="Lets Shave"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-center overflow-hidden oc-img">
          <div className="w-3/5 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/thrillophilia.png"
              alt="Thrill Ophilia"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-center overflow-hidden oc-img">
          <div className="w-1/3 flex items-center justify-center overflow-hidden">
            <img src="/images/clients/hue.png" alt="Hue" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="w-full flex items-center justify-center overflow-hidden oc-img">
          <div className="w-1/3 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/truemind.png"
              alt="TrueMind Capital"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-center overflow-hidden oc-img">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/grofers.png"
              alt="Grofers"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-center overflow-hidden oc-img">
          <div className="xs:w-4/5 lg:w-1/2 flex items-center justify-center overflow-hidden">
            <img
              src="/images/clients/divya-bhaskar.png"
              alt="Divya Bhaskar"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;

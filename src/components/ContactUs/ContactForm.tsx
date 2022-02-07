import { useState } from '@hookstate/core';
import React from 'react';
import Select from 'react-select';
import { ButtonArrow } from '../../../static/svg/ButtonArrow';
import { InquiryOptions } from '../../components/constants';
import { DropdownIndicator } from '../../components/libs/selectDropdownArrow';

interface IContactForm {
  isMobile?: boolean;
}

const ContactForm = (props: IContactForm) => {
  const {} = props;
  const isHelp = useState(null);

  // tslint:disable-next-line: no-any
  const onChangeHandle = (selectedOption: any) => {
    isHelp.set(selectedOption);
  };

  return (
    <>
      <div className="w-full h-full flex justify-between items-top  mb-5 lg:justify-start lg:container lg:mx-auto">
        <section className="w-1/2 h-full flex justify-between items-center xs:px-4 lg:px-8 mb-5 lg:justify-start lg:container lg:mx-auto">
          <form action="" name="contact_form" method="post">
            <div className="w-full grid xs:grid-cols-1 lg:grid-cols-2 xs:gap-5 lg:gap-x-10 lg:gap-y-8">
              <div className="w-full flex items-center justify-center flex-wrap">
                <input
                  required
                  type="text"
                  name="first_name"
                  placeholder="First Name*"
                  className="form-input border p-4 rounded-none text-base w-full border-customColors-400 text-primary focus:border-black focus:outline-none  text-light tracking-wide relative"
                />
                <p className="w-full text-customColors-500 text-xs hidden">error message</p>
              </div>

              <div className="w-full flex items-center justify-center flex-wrap">
                <input
                  required
                  type="text"
                  name="last_name"
                  placeholder="Last Name*"
                  className="form-input border p-4 rounded-none text-base w-full border-customColors-400 text-primary focus:border-black focus:outline-none  text-light tracking-wide relative"
                />
                <p className="w-full text-customColors-500 text-xs hidden">error message</p>
              </div>

              <div className="w-full flex items-center justify-center flex-wrap">
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="form-input border p-4 rounded-none text-base w-full border-customColors-400 text-primary focus:border-black focus:outline-none  text-light tracking-wide relative"
                />
                <p className="w-full text-customColors-500 text-xs hidden">error message</p>
              </div>

              <div className="w-full flex items-center justify-center flex-wrap">
                <input
                  required
                  type="text"
                  name="company_name"
                  placeholder="Company Name*"
                  className="form-input border p-4 rounded-none text-base w-full border-customColors-400 text-primary focus:border-black focus:outline-none  text-light tracking-wide relative"
                />
                <p className="w-full text-customColors-500 text-xs hidden">error message</p>
              </div>

              <div className="w-full xs:hidden lg:flex items-center justify-center flex-wrap" />

              <div className="w-full xs:hidden lg:flex items-center justify-center flex-wrap" />
            </div>
            <div className="w-full flex items-center justify-center flex-wrap">
              <Select
                placeholder="Select purpose"
                components={{ DropdownIndicator }}
                onChange={onChangeHandle}
                options={InquiryOptions}
                theme={(theme) => ({
                  ...theme,
                  borderWidth: 0,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: '#C2C2C2',
                    primary: '#808080'
                  }
                })}
                classNamePrefix="actonate-select"
                // className="form-input border-0 rounded-none text-base w-full border-b border-customColors-100 text-primary focus:border-black focus:outline-none px-0 py-0 text-light tracking-wide relative"
                className="form-input border p-3 rounded-none text-base w-full border-customColors-400 text-primary focus:border-black focus:outline-none  text-light tracking-wide relative"
              />
              <p className="w-full text-customColors-500 text-xs hidden">error message</p>
            </div>
            <div className="w-full mt-6 flex items-center justify-center flex-wrap">
              {/* <label className="w-full flex items-center justify-start text-customColors-100 font-medium mb-3">
              Message
            </label> */}
              <textarea
                placeholder="Message"
                name="message"
                rows={5}
                className="form-input rounded-sm text-base w-full border border-customColors-400 text-primary focus:border-black focus:outline-none px-3 py-2 text-light tracking-wide relative resize-none"
              />
              <p className="w-full text-customColors-500 text-xs hidden">error message</p>
            </div>
            <div className="w-full flex items-center justify-start xs:mt-5 lg:mt-8">
              <button
                type="submit"
                className="flex items-center justify-center border border-customColors-500 text-customColors-500 px-4 py-1 rounded-sm transform transition-all duration-300 hover:bg-customColors-500 hover:text-white cs-readmore"
              >
                Send
                <ButtonArrow className="ml-2 " />
              </button>
            </div>
          </form>
        </section>
        <section className="w-1/2 h-full flex justify-between items-center xs:px-4 lg:px-8 mb-5 lg:justify-start lg:container lg:mx-auto">
          <form action="" name="contact_form" method="post">
            {/* <div className="w-full grid xs:grid-cols-1 lg:grid-cols-2 xs:gap-5 lg:gap-x-10 lg:gap-y-8"> */}
            <div className="w-full flex">
              <div className="w-1/2 uppercase text-xl">
                Mailing Address
                <p className="text-sm py-4 pb-8">
                  Near Petrol Pump, Vadsar Bridge (West End), GIDC Makarpura, Vadodara, Gujarat,
                  India – 390010.
                </p>
              </div>
              <div className="w-1/2 uppercase text-xl ">
                Contact Info
                <p className="text-sm py-3">
                  8866064026,9033064026, 9824389873, 9712578788 info@actionengineers.com
                </p>
              </div>
            </div>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="600"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Action%20engineers&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                ></iframe>
                <a href="https://fmovies-online.net"></a>
                <br></br>
                <style>.mapouter</style>
                <a href="https://www.embedgooglemap.net">custom google maps embed</a>
                <style>.gmap_canvas </style>
              </div>
            </div>
            <div className="w-full xs:hidden lg:flex items-center justify-center flex-wrap" />

            <div className="w-full xs:hidden lg:flex items-center justify-center flex-wrap" />
            {/* </div> */}
          </form>
        </section>
      </div>
    </>
  );
};

export default ContactForm;

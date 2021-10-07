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
      <section className="w-full h-full flex justify-between items-center xs:px-4 lg:px-8 mb-5 lg:justify-start lg:container lg:mx-auto">
        <form className="w-full" action="" name="contact_form" method="post">
          <div className="w-full grid xs:grid-cols-1 lg:grid-cols-2 xs:gap-5 lg:gap-x-20 lg:gap-y-8">
            <div className="w-full flex items-center justify-center flex-wrap">
              <input
                required
                type="text"
                name="first_name"
                placeholder="First Name*"
                className="form-input border-0 rounded-none text-base w-full border-b border-customColors-100 text-primary focus:border-black focus:outline-none px-0 py-1 text-light tracking-wide relative"
              />
              <p className="w-full text-customColors-500 text-xs hidden">error message</p>
            </div>

            <div className="w-full flex items-center justify-center flex-wrap">
              <input
                required
                type="text"
                name="last_name"
                placeholder="Last Name*"
                className="form-input border-0 rounded-none text-base w-full border-b border-customColors-100 text-primary focus:border-black focus:outline-none px-0 py-1 text-light tracking-wide relative"
              />
              <p className="w-full text-customColors-500 text-xs hidden">error message</p>
            </div>

            <div className="w-full flex items-center justify-center flex-wrap">
              <input
                required
                type="email"
                name="email"
                placeholder="Email*"
                className="form-input border-0 rounded-none text-base w-full border-b border-customColors-100 text-primary focus:border-black focus:outline-none px-0 py-1 text-light tracking-wide relative"
              />
              <p className="w-full text-customColors-500 text-xs hidden">error message</p>
            </div>

            <div className="w-full flex items-center justify-center flex-wrap">
              <input
                required
                type="text"
                name="company_name"
                placeholder="Company Name*"
                className="form-input border-0 rounded-none text-base w-full border-b border-customColors-100 text-primary focus:border-black focus:outline-none px-0 py-1 text-light tracking-wide relative"
              />
              <p className="w-full text-customColors-500 text-xs hidden">error message</p>
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
                className="form-input border-0 rounded-none text-base w-full border-b border-customColors-100 text-primary focus:border-black focus:outline-none px-0 py-0 text-light tracking-wide relative"
              />
              <p className="w-full text-customColors-500 text-xs hidden">error message</p>
            </div>

            <div className="w-full xs:hidden lg:flex items-center justify-center flex-wrap" />

            <div className="w-full flex items-center justify-center flex-wrap">
              <label className="w-full flex items-center justify-start text-customColors-100 font-medium mb-3">
                Message
              </label>
              <textarea
                placeholder="Type here"
                name="message"
                rows={5}
                className="form-input rounded-sm text-base w-full border border-customColors-400 text-primary focus:border-black focus:outline-none px-3 py-2 text-light tracking-wide relative resize-none"
              />
              <p className="w-full text-customColors-500 text-xs hidden">error message</p>
            </div>

            <div className="w-full xs:hidden lg:flex items-center justify-center flex-wrap" />
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
    </>
  );
};

export default ContactForm;

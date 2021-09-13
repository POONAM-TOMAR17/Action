import React from 'react';
import { ButtonArrow } from '../../../static/svg/ButtonArrow';

export const FooterForm = () => {
  return (
    <div className="w-full flex flex-row justify-between py-10 sapce-x-10">
      <div className="w-1/3 flex flex-col items-start justify-start space-y-2">
        <p className="font-raleway text-3xl tracking-wide text-customColors-600">
          Lets build future together
        </p>
        <p className="text-customColors-400 font-light">
          Get the latest updates of our projects and products, just Information and no spams for
          sure!
        </p>
      </div>
      <div className="w-1/2 flex flex-row items-end pb-1 justify-end">
        <div className="flex-1">
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            className="form-input border-0 rounded-none bg-transparent text-base w-full border-b border-customBackground-400 text-customBackground-400 focus:border-white focus:outline-none lg:pl-0"
          />
        </div>
        <div className="w-auto ml-4">
          <button
            name="submit"
            type="submit"
            className="flex items-center justify-center border border-customBackground-400 text-customBackground-400 px-4 py-1 rounded-sm transform transition-all duration-300 hover:bg-customBackground-400 hover:text-footerBackground uppercase cs-readmore"
          >
            Submit
            <ButtonArrow className="w-4 h-4 ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

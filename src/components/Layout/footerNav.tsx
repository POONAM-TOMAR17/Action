import React from 'react';
import { FacebookIcon } from '../../../static/svg/FacebookIcon';
import { GooglePlusIcon } from '../../../static/svg/GooglePlusIcon';
import { LinkedInIcon } from '../../../static/svg/LinkedInIcon';
import { TwitterIcon } from '../../../static/svg/TwitterIcon';
import { mainNavigation } from '../../components/constants';

export const FooterNav = () => {
  return (
    <div className="w-full flex flex-wrap lg:flex-nowrap items-center justify-between lg:pb-4 lg:border-b lg:border-customBackground-400">
      <div className="xs:w-full xs:pb-5 xs:mb-5 xs:border-b xs:border-customBackground-400 lg:w-auto lg:pb-0 lg:mb-0 flex flex-wrap lg:flex-nowrap items-start justify-start lg:border-0">
        <ul className="xs:w-full lg:w-auto grid grid-cols-3 gap-5 lg:flex lg:flex-nowrap lg:items-center lg:justify-start lg:space-x-14">
          {mainNavigation.map((item, index) => (
            <li key={index} className="static hoverable flex justify-start items-center">
              <a
                href={item.link}
                className="relative transform transition-all duration-300 text-customBackground-400 lg:text-white hover:text-customColors-500 font-light"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap items-start justify-end">
        <ul className="flex flex-wrap lg:flex-nowrap items-center space-x-6">
          <li>
            <a
              href="http://fb.com/actonate"
              target="_blank"
              className="flex items-center justify-ceter"
            >
              <FacebookIcon className="xs:w-9 xs:h-9 lg:w-10 lg:h-10" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/actonate"
              target="_blank"
              className="flex items-center justify-ceter"
            >
              <TwitterIcon className="xs:w-9 xs:h-9 lg:w-10 lg:h-10" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="flex items-center justify-ceter">
              <GooglePlusIcon className="xs:w-9 xs:h-9 lg:w-10 lg:h-10" />
            </a>
          </li>
          <li>
            <a
              href="https://in.linkedin.com/company/actonate"
              target="_blank"
              className="flex items-center justify-ceter"
            >
              <LinkedInIcon className="xs:w-9 xs:h-9 lg:w-10 lg:h-10" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

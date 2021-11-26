import { useState } from '@hookstate/core';
import React from 'react';
import { ArrowRight } from '../../../../static/svg/ArrowRight';
import { CloseIcon } from '../../../../static/svg/CloseIcon';
import { FacebookIcon } from '../../../../static/svg/FacebookIcon';
import { GooglePlusIcon } from '../../../../static/svg/GooglePlusIcon';
import { LinkedInIcon } from '../../../../static/svg/LinkedInIcon';
import { TwitterIcon } from '../../../../static/svg/TwitterIcon';
import { mainNavigation } from '../../../components/constants';
import { MainNavigationType } from '../../../components/libs/typeInterface';
import { SubMenu } from '../submenu';
import SearchBar from './searchBar';

interface INavbarProps {
  isMobile: boolean;
}

const Navbar = (props: INavbarProps) => {
  const { isMobile } = props;
  const menuActive = useState(false);
  const subActive = useState(false);
  const searchActive = useState(false);

  return (
    <>
      <header className="relative bg-white w-full xs:h-16 lg:h-20 xs:z-99 lg:z-auto">
        <div className="relative h-full lg:shadow-lg">
          <div className="w-full h-full flex justify-between items-center xs:px-4 lg:px-8 lg:justify-start lg:container lg:mx-auto">
            <div className="flex items-end justify-start flex-nowrap">
              <a
                className="lg:hidden flex items-end justify-center mr-5 border-0 outline-none shadow-none focus:outline-none focus:shadow-none"
                onClick={() => {
                  menuActive.set(true);
                  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
                }}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M2.43775 4.77788C2.37414 4.77698 2.31099 4.78873 2.25197 4.81245C2.19294 4.83617 2.13922 4.87138 2.09392 4.91604C2.04863 4.9607 2.01266 5.01392 1.98811 5.07261C1.96356 5.13129 1.95091 5.19427 1.95091 5.25788C1.95091 5.32149 1.96356 5.38447 1.98811 5.44315C2.01266 5.50184 2.04863 5.55506 2.09392 5.59972C2.13922 5.64438 2.19294 5.67959 2.25197 5.70331C2.31099 5.72703 2.37414 5.73878 2.43775 5.73788H23.5577C23.6214 5.73878 23.6845 5.72703 23.7435 5.70331C23.8026 5.67959 23.8563 5.64438 23.9016 5.59972C23.9469 5.55506 23.9828 5.50184 24.0074 5.44315C24.0319 5.38447 24.0446 5.32149 24.0446 5.25788C24.0446 5.19427 24.0319 5.13129 24.0074 5.07261C23.9828 5.01392 23.9469 4.9607 23.9016 4.91604C23.8563 4.87138 23.8026 4.83617 23.7435 4.81245C23.6845 4.78873 23.6214 4.77698 23.5577 4.77788H2.43775ZM2.43775 11.9779C2.37414 11.977 2.31099 11.9887 2.25197 12.0125C2.19294 12.0362 2.13922 12.0714 2.09392 12.116C2.04863 12.1607 2.01266 12.2139 1.98811 12.2726C1.96356 12.3313 1.95091 12.3943 1.95091 12.4579C1.95091 12.5215 1.96356 12.5845 1.98811 12.6432C2.01266 12.7018 2.04863 12.7551 2.09392 12.7997C2.13922 12.8444 2.19294 12.8796 2.25197 12.9033C2.31099 12.927 2.37414 12.9388 2.43775 12.9379H23.5577C23.6214 12.9388 23.6845 12.927 23.7435 12.9033C23.8026 12.8796 23.8563 12.8444 23.9016 12.7997C23.9469 12.7551 23.9828 12.7018 24.0074 12.6432C24.0319 12.5845 24.0446 12.5215 24.0446 12.4579C24.0446 12.3943 24.0319 12.3313 24.0074 12.2726C23.9828 12.2139 23.9469 12.1607 23.9016 12.116C23.8563 12.0714 23.8026 12.0362 23.7435 12.0125C23.6845 11.9887 23.6214 11.977 23.5577 11.9779H2.43775ZM2.43775 19.1779C2.37414 19.177 2.31099 19.1887 2.25197 19.2125C2.19294 19.2362 2.13922 19.2714 2.09392 19.316C2.04863 19.3607 2.01266 19.4139 1.98811 19.4726C1.96356 19.5313 1.95091 19.5943 1.95091 19.6579C1.95091 19.7215 1.96356 19.7845 1.98811 19.8432C2.01266 19.9018 2.04863 19.9551 2.09392 19.9997C2.13922 20.0444 2.19294 20.0796 2.25197 20.1033C2.31099 20.127 2.37414 20.1388 2.43775 20.1379H23.5577C23.6214 20.1388 23.6845 20.127 23.7435 20.1033C23.8026 20.0796 23.8563 20.0444 23.9016 19.9997C23.9469 19.9551 23.9828 19.9018 24.0074 19.8432C24.0319 19.7845 24.0446 19.7215 24.0446 19.6579C24.0446 19.5943 24.0319 19.5313 24.0074 19.4726C23.9828 19.4139 23.9469 19.3607 23.9016 19.316C23.8563 19.2714 23.8026 19.2362 23.7435 19.2125C23.6845 19.1887 23.6214 19.177 23.5577 19.1779H2.43775Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.998047 0.458008)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="/" className="flex items-center justify-center">
                <img src="/images/actonate-logo.svg" alt="actonate-logo" />
              </a>
            </div>
            <div className="lg:h-full lg:flex-1 lg:flex justify-between lg:ml-6">
              <nav
                className={
                  `flex h-full xs:fixed xs:left-0 xs:top-0 xs:w-full lg:position-unset lg:z-auto lg:translate-x-unset transform duration-100 ease-in-out ${
                    searchActive.get()
                      ? ' lg:w-0 lg:flex-shrink-0 lg:opacity-0 lg:z-1'
                      : ' lg:flex-1'
                  }` +
                  `${
                    menuActive.get()
                      ? ' xs:z-9999 xs:translate-x-0'
                      : ' xs:-translate-x-full xs:z-1'
                  }`
                }
              >
                <div
                  onClick={() => {
                    menuActive.set(false);
                    document.getElementsByTagName('body')[0].removeAttribute('style');
                  }}
                  className={`xs:absolute lg:hidden w-full h-full bg-black bg-opacity-40 transform duration-500 ${
                    menuActive.get() ? ' xs:flex xs:z-99 opacity-100' : ' xs:hidden opacity-0'
                  }`}
                />
                <div className="xs:w-4/5 xs:z-999 xs:flex flex-col justify-between items-start bg-white overflow-hidden overflow-y-auto lg:flex lg:z-auto lg:flex-1 lg:h-full lg:bg-transparent lg:overflow-unset no-scrollbar">
                  <div className="w-full xs:flex lg:hidden items-center justify-start flex-nowrap xs:h-16 px-4">
                    <a
                      onClick={() => {
                        menuActive.set(false);
                        document.getElementsByTagName('body')[0].removeAttribute('style');
                      }}
                      className="border border-transparent cursor-pointer flex items-center justify-center mr-5 overflow-hidden"
                      style={{ width: '25px', height: '25px' }}
                    >
                      <CloseIcon className="w-full h-full" strokeWidth="1" />
                    </a>
                    <a href="/" className="flex items-center justify-center">
                      <img src="/images/actonate-logo.svg" alt="actonate-logo" />
                    </a>
                  </div>
                  <ul className="flex-col xs:w-full lg:w-auto lg:h-full lg:flex-row flex justify-center items-center">
                    {mainNavigation.map((item: MainNavigationType, index: number) => (
                      <li
                        key={index}
                        className="hoverable xs:w-full lg:w-auto flex justify-start items-center xs:flex-wrap lg:flex-nowrap lg:h-full"
                      >
                        {!item.subMenu ? (
                          <a
                            href={item.link}
                            className="relative transform transition-all duration-300 hover:text-customColors-500 flex items-center xs:justify-between lg:justify-center xs:text-xl lg:text-base lg:h-full xs:py-5 lg:py-0 px-5 cursor-pointer xs:w-full lg:w-auto"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <>
                            {!isMobile ? (
                              <a
                                href={item.link}
                                className="relative transform transition-all duration-300 lg:hover:text-customColors-500 flex items-center xs:justify-between lg:justify-center xs:text-xl lg:text-base xs:py-5 lg:py-0 px-5 cursor-pointer xs:w-full lg:w-auto"
                              >
                                {item.name}
                                {item.subMenu && item.subMenu.length > 0 && (
                                  <p
                                    onClick={() => subActive.set(!subActive.get())}
                                    className="ml-2 flex items-center justify-center"
                                  >
                                    <ArrowRight
                                      className="w-3 h-3 lg:w-2 lg:h-2 lg:mt-1 transform duration-300 lg:rotate-90"
                                      strokeWidth="2"
                                    />
                                  </p>
                                )}
                              </a>
                            ) : (
                              <div className="relative transform transition-all duration-300 lg:hover:text-customColors-500 flex items-center xs:justify-between lg:justify-center xs:text-xl lg:text-base xs:py-5 lg:py-0 px-5 cursor-pointer xs:w-full lg:w-auto">
                                <a href={item.link}>{item.name}</a>
                                {item.subMenu && item.subMenu.length > 0 && (
                                  <p
                                    onClick={() => subActive.set(!subActive.get())}
                                    className="ml-2 flex items-center justify-center"
                                  >
                                    <ArrowRight
                                      className={`w-3 h-3 lg:w-2 lg:h-2 lg:mt-1 transform duration-300 lg:rotate-90 ${
                                        subActive.get() ? ' xs:rotate-90' : ''
                                      }`}
                                      strokeWidth="2"
                                    />
                                  </p>
                                )}
                              </div>
                            )}

                            <SubMenu
                              subActive={subActive.get()}
                              menu={item.name}
                              subMenu={item.subMenu}
                            />
                          </>
                        )}
                      </li>
                    ))}
                    <li className="xs:w-full lg:w-auto flex justify-start items-center lg:h-full">
                      <a
                        href="/contact-us"
                        className="lg:hidden relative transform transition-all duration-300 hover:text-customColors-500 flex items-center xs:justify-between lg:justify-center xs:text-xl lg:text-base xs:py-5 lg:py-0 px-5 cursor-pointer xs:w-full lg:w-auto"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                  <ul className="xs:flex lg:hidden flex-nowrap items-center space-x-6 bg-footerBackground w-full p-5">
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
              </nav>
              <div
                className={`xs:hidden lg:flex justify-start relative ${
                  searchActive.get() ? ' w-full' : ''
                }`}
              >
                <ul className="w-full flex items-center justify-end space-x-10">
                  <li className="flex-1 lg:block">
                    <SearchBar searchActive={searchActive} />
                  </li>
                  <li>
                    <a
                      href="/contact-us"
                      className="text-buttonColor border border-buttonColor rounded-sm px-4 py-2 transform transition-all duration-300 hover:bg-buttonColor hover:text-white"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:hidden">
              <SearchBar searchActive={searchActive} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

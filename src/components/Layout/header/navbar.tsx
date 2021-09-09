import { useState } from '@hookstate/core';
import React from 'react';
import { mainNavigation } from '../../../components/constants';
import { SubMenu } from '../submenu';
import SearchBar from './searchBar';

const Navbar = () => {
  const menuActive = useState(false);
  const searchActive = useState(false);

  return (
    <>
      <header className="relative bg-white w-full h-24">
        <div className="relative h-full">
          <div className="w-full h-full flex justify-between items-center xs:px-4 lg:px-8 lg:justify-start lg:container lg:mx-auto">
            <div className="flex items-center justify-start flex-nowrap">
              <a href="/" className="flex logo">
                <img src="/images/actonate-logo.svg" alt="actonate-logo" />
              </a>
              <div className="flex flex-nowrap">
                <div className={`lg:hidden navbar-toggle ${menuActive.get() ? 'open' : ''}`}>
                  <button onClick={() => menuActive.set(true)} type="button">
                    <svg
                      className="close-ico"
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.0157 16.2459C0.970084 16.2902 0.933703 16.3431 0.908799 16.4017C0.883817 16.4602 0.870722 16.5231 0.870227 16.5867C0.869809 16.6503 0.881993 16.7133 0.906141 16.7722C0.930288 16.8311 0.965891 16.8846 1.01086 16.9295C1.05583 16.9745 1.10933 17.0101 1.16819 17.0343C1.22699 17.0583 1.29011 17.0706 1.35368 17.0701C1.41731 17.0697 1.48019 17.0566 1.53869 17.0316C1.59718 17.0066 1.65018 16.9703 1.69452 16.9247L16.6286 1.99064C16.6743 1.94623 16.7105 1.89327 16.7355 1.83479C16.7605 1.77624 16.7736 1.71338 16.774 1.64974C16.7745 1.58617 16.7622 1.5231 16.7382 1.46427C16.714 1.40544 16.6784 1.35191 16.6335 1.30694C16.5885 1.26196 16.535 1.2264 16.4761 1.20221C16.4172 1.1781 16.3542 1.16587 16.2906 1.16629C16.227 1.16679 16.1642 1.17987 16.1056 1.2049C16.0471 1.22979 15.9942 1.26614 15.9498 1.31182L1.0157 16.2459Z"
                        fill="black"
                      />
                      <path
                        d="M1.69453 1.31181C1.65018 1.2662 1.59726 1.22982 1.53869 1.20491C1.48019 1.17993 1.41732 1.16683 1.35375 1.16634C1.29012 1.16592 1.22706 1.1781 1.1682 1.20225C1.10933 1.2264 1.05584 1.262 1.01087 1.30698C0.965894 1.35195 0.930291 1.40544 0.906143 1.46431C0.882066 1.5231 0.869812 1.58623 0.8703 1.64979C0.870724 1.71343 0.88382 1.7763 0.908802 1.8348C0.933777 1.89329 0.970087 1.94629 1.0157 1.99063L15.9498 16.9247C15.9942 16.9704 16.0471 17.0066 16.1056 17.0316C16.1642 17.0566 16.227 17.0697 16.2907 17.0701C16.3542 17.0706 16.4173 17.0583 16.4761 17.0343C16.535 17.0101 16.5885 16.9745 16.6335 16.9296C16.6784 16.8846 16.714 16.8311 16.7382 16.7722C16.7623 16.7133 16.7745 16.6503 16.7741 16.5867C16.7736 16.5231 16.7605 16.4603 16.7355 16.4017C16.7106 16.3432 16.6743 16.2903 16.6286 16.2459L1.69453 1.31181Z"
                        fill="black"
                      />
                    </svg>
                    <svg
                      className="bar-ico"
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
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`navbar lg:h-full lg:flex-1 flex justify-between lg:ml-6 ${
                menuActive.get() ? 'open' : ''
              }`}
            >
              <nav
                className={`flex space-x-10 lg:h-full${
                  searchActive.get() ? ' w-0 flex-shrink-0 opacity-0 z-1' : ' flex-1'
                }`}
              >
                <ul className="flex justify-center items-center lg:h-full">
                  {mainNavigation.map((item, index) => (
                    <li
                      key={index}
                      className="static hoverable flex justify-start items-center lg:h-full lg:px-5"
                    >
                      <a
                        href={item.link}
                        className="relative transform transition-all duration-300 hover:text-customColors-500"
                      >
                        {item.name}
                      </a>
                      {item.link === '' && item.subMenu && item.subMenu.length > 0 && (
                        <SubMenu subMenu={item.subMenu} />
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className={`flex justify-start relative${searchActive.get() ? ' w-full' : ''}`}>
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
                <div className="bg-block-top" />
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

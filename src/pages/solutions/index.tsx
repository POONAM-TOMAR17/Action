import React from 'react';
import { mainNavigation } from '../../components/constants';
import Layout from '../../components/Layout/layout';

const SolutionIndex = () => {
  const menuArray = mainNavigation.filter((item) => item.name.toLowerCase() === 'solutions');
  const subMenu = menuArray[0].subMenu;

  return (
    <Layout>
      <div className="lg:bg-white">
        <div className="max-w-7xl mx-auto flex flex-wrap xs:px-4 lg:px-8 lg:py-12">
          <div className="w-full xs:hidden lg:flex items-center justify-start border-b border-primary pb-5 mb-5">
            <p className="font-semibold text-xl">Solutions</p>
          </div>
          <div className="w-full flex flex-wrap">
            {/* tslint:disable-next-line: no-any */}
            {subMenu?.map((value: any, index: number) => {
              return (
                <div
                  key={index}
                  className="w-full grid xs:grid-cols-1 lg:grid-cols-3 lg:gap-5 xs:mb-5 lg:mb-10"
                >
                  <p className="xs:text-lg lg:text-base font-light text-customColors-200 lg:col-span-3 xs:mb-2 lg:mx-0">
                    {value.name}
                  </p>
                  {/* tslint:disable-next-line: no-any */}
                  {value.items.map((submenu: any, i: number) => (
                    <a
                      key={i}
                      href={submenu.link}
                      className="relative hover:text-customColors-500 text-base xs:border-dotted xs:border-borderColor xs:py-2 lg:py-0 lg:text-sm xs:w-full lg:w-auto lg:border-0 lg:px-0 font-medium"
                    >
                      {submenu.name}
                    </a>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SolutionIndex;

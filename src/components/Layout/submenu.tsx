import React from 'react';
import { SubMenuType } from '../../components/libs/typeInterface';

interface ISubMenu {
  subMenu: SubMenuType;
  menu: string;
  subActive: boolean;
}

export const SubMenu = (props: ISubMenu) => {
  const { subMenu, menu, subActive } = props;
  return (
    <div
      className={`mega-menu w-full relative xs:translate xs:duration-300 lg:absolute lg:inset-x-0 lg:shadow-lg lg:left-0 lg:top-full lg:scale-100 lg:h-auto xs:overflow-hidden lg:overflow-unset${
        subActive
          ? ' xs:h-auto xs:opacity-100 xs:scale-100 xs:z-auto'
          : ' xs:h-0 xs:opacity-0 xs:scale-0 xs:z-1'
      }`}
    >
      <div className="lg:bg-white">
        <div className="max-w-7xl mx-auto flex flex-wrap xs:px-7 lg:px-12 lg:py-12">
          <div className="w-full xs:hidden lg:flex items-center justify-start border-b border-primary pb-5 mb-5">
            <p className="font-semibold text-xl">{menu}</p>
          </div>
          <div className="w-full flex flex-wrap">
            {/* tslint:disable-next-line: no-any */}
            {subMenu.map((value: any, index: number) => {
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
    </div>
  );
};

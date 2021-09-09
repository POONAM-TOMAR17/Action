import React from 'react';
import { SubMenuType } from '../../components/libs/typeInterface';

interface ISubMenu {
  subMenu: SubMenuType[];
}

export const SubMenu = (props: ISubMenu) => {
  const { subMenu } = props;
  return (
    <div className="mega-menu w-full absolute z-10 inset-x-0 shadow-lg left-0 top-full">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto flex flex-wrap px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12 xl:py-16">
          <div className="w-full grid grid-cols-2 gap-5">
            {subMenu.map((item: SubMenuType, index: number) => (
              <a
                key={index}
                href={item.link}
                className="relative hover:text-customColors-500 text-sm lg:px-5"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

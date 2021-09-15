import React from 'react';
import { SubMenuType } from '../../components/libs/typeInterface';

interface ISubMenu {
  subMenu: SubMenuType[];
  subActive: boolean;
}

export const SubMenu = (props: ISubMenu) => {
  const { subMenu, subActive } = props;
  return (
    <div
      className={`mega-menu w-full relative xs:translate xs:duration-300 lg:absolute lg:inset-x-0 lg:shadow-lg lg:left-0 lg:top-full lg:scale-100 lg:h-auto xs:overflow-hidden lg:overflow-unset${
        subActive
          ? ' xs:h-auto xs:opacity-100 xs:scale-100 xs:z-auto'
          : ' xs:h-0 xs:opacity-0 xs:scale-0 xs:z-1'
      }`}
    >
      <div className="lg:bg-white">
        <div className="max-w-7xl mx-auto flex flex-wrap xs:px-7 lg:px-8 lg:py-12">
          <div className="w-full flex flex-wrap lg:grid lg:grid-cols-2 lg:gap-5 xs:divide-y lg:divide-y-0">
            {subMenu.map((item: SubMenuType, index: number) => (
              <a
                key={index}
                href={item.link}
                style={index === subMenu.length - 1 ? { borderBottom: '1px dotted #E5E5E5' } : {}}
                className={`relative hover:text-customColors-500 text-base xs:border-dotted xs:border-borderColor xs:py-2 lg:py-0 lg:text-sm xs:w-full lg:w-auto lg:border-0 lg:px-5${
                  index === 0 ? ' xs:border-t' : ''
                }`}
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

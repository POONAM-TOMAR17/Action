import React, { useEffect, useState } from 'react';
import { placeholderBig } from '../../components/constants';
import {
  StudyBlockType,
  StudyContentMenuType,
  StudyContentType,
  StudyDescriptionType
} from '../../components/libs/typeInterface';
import { useWindowSize } from '../../components/libs/useWindowSize';

export function getOffset(el: Element) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}
interface IMainContentsProps {
  content: StudyContentType;
}

const MainContents = (props: IMainContentsProps) => {
  const { content } = props;
  const [width] = useWindowSize();
  const [menuShow, setMenuShow] = useState(false);

  const isMobile = width < 1025 ? true : false;

  useEffect(() => {
    let navMenu = document.getElementById('csNav');
    let anchorList = navMenu?.querySelectorAll('a[href^="#"]');

    anchorList?.forEach((link: Element) => {
      // tslint:disable-next-line: typedef
      link.addEventListener('click', function (e) {
        e.preventDefault();

        // @ts-ignore
        let destination = document.querySelector(this.hash);

        destination.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    function isScrolledIntoView(elem: string) {
      var scrollPos = window.pageYOffset;
      var element = document.getElementById(elem);
      var elemTop, elemBottom;
      if (element) {
        elemTop = getOffset(element).top - (isMobile ? 100 : 0);
        elemBottom = elemTop + element.scrollHeight;

        return scrollPos >= elemTop && scrollPos <= elemBottom;
      }
    }

    function mobileStickyNav() {
      var scrollPos = window.pageYOffset;
      var sections = document.querySelectorAll('.cs-section');
      var elementFirst = sections[0];
      var elementLast = sections[sections.length - 1];
      var elemTop, elemBottom;
      if (elementFirst && elementLast) {
        elemTop = getOffset(elementFirst).top - 50;
        elemBottom = getOffset(elementLast).top + elementLast.scrollHeight - 50;
        return scrollPos >= elemTop && scrollPos <= elemBottom;
      }
    }

    window.addEventListener('scroll', function () {
      var divs = document.querySelectorAll('div.cs-section');

      divs.forEach((item) => {
        var id = item.id;
        if (isScrolledIntoView(id)) {
          var newTag = document.querySelector('a[href="#' + id + '"]');
          var parent = newTag?.parentNode?.parentNode;
          // tslint:disable-next-line: no-any
          parent?.childNodes?.forEach((i: any) => {
            i.children[0].classList.remove('border-customColors-500');
          });
          newTag?.classList.add('border-customColors-500');
        }
      });
      if (mobileStickyNav()) {
        setMenuShow(true);
      } else {
        setMenuShow(false);
      }
    });
  }, []);

  return (
    <>
      <section className="w-full flex justify-between items-center xs:px-4 lg:px-8 xs:mb-5 lg:mb-10 lg:justify-start lg:container lg:mx-auto relative">
        <div className="w-full flex justify-start items-start xs:flex-col lg:flex-row lg:space-x-5">
          <ul
            id="csNav"
            className={`duration-300 xs:w-full lg:w-1/4 xs:bg-white lg:bg-transparent xs:fixed xs:left-0 xs:top-0 lg:sticky lg:left-unset lg:top-10 lg:pr-5 lg:flex xs:flex-row xs:justify-between lg:justify-start lg:flex-col xs:z-10 lg:z-auto xs:transform lg:opacity-100 xs:shadow-md lg:shadow-none ${
              menuShow ? ' xs:flex xs:opacity-100' : ' xs:hidden xs:opacity-0'
            }`}
          >
            {content.menu.map((menuItem: StudyContentMenuType, i: number) => {
              return (
                <li
                  key={i}
                  className="xs:flex-1 lg:flex-none lg:w-full flex xs:justify-center lg:justify-start"
                >
                  <a
                    href={menuItem.link}
                    className="cursor-pointer py-4 border-b-2 border-transparent hover:border-customColors-500"
                  >
                    {menuItem.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="xs:w-full xs:flex-none lg:flex-1 relative flex flex-col">
            {content.blocks.map((contentItem: StudyBlockType, j: number) => (
              <div
                key={j}
                id={contentItem.id || ''}
                className="w-full flex justify-start items-start flex-col space-y-4 xs:mb-4 lg:mb-8 cs-section"
              >
                {contentItem.labelText && contentItem.labelText !== '' && (
                  <p className="text-sm uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
                    {contentItem.labelText}
                  </p>
                )}
                {contentItem.title && contentItem.title !== '' && (
                  <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
                    {contentItem.title}
                  </p>
                )}
                {contentItem.description && contentItem.description.length > 0 && (
                  <div className="w-full flex flex-col xs:space-y-6 lg:space-y-12">
                    {contentItem.description.map((item: StudyDescriptionType, index: number) => (
                      <div className="w-full flex flex-col xs:space-y-2 lg:space-y-4" key={index}>
                        {item.title && item.title !== '' && (
                          <p className="text-lg font-bold">{item.title}</p>
                        )}
                        {item.textOnly && item.textOnly !== '' && (
                          <div
                            className="space-y-4"
                            dangerouslySetInnerHTML={{ __html: item.textOnly || '' }}
                          />
                        )}
                        {item.list && item.list.data.length > 0 && (
                          <ul
                            className={`${
                              item.list.type === 'decimal'
                                ? 'list-decimal list-inside'
                                : 'list-disc xs:ml-8 lg:ml-14'
                            } space-y-4`}
                          >
                            {item.list.data.map((listItem: string, x: number) => (
                              <li key={x} className="font-bold">
                                {listItem}
                              </li>
                            ))}
                          </ul>
                        )}
                        {item.img !== undefined && (
                          <img src={item.img === '' ? placeholderBig : item.img} alt={item.title} />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContents;

import React, { useEffect } from 'react';
import { placeholderBig } from '../../components/constants';
import {
  StudyBlockType,
  StudyContentMenuType,
  StudyContentType,
  StudyDescriptionType
} from '../../components/libs/typeInterface';

interface IMainContentsProps {
  content: StudyContentType;
}

const MainContents = (props: IMainContentsProps) => {
  const { content } = props;

  useEffect(() => {
    // tslint:disable-next-line: no-any
    function getOffset(el: Element) {
      const rect = el.getBoundingClientRect();
      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
      };
    }

    function isScrolledIntoView(elem: string) {
      var scrollPos = window.pageYOffset;
      var element = document.getElementById(elem);
      var elemTop, elemBottom;
      if (element) {
        elemTop = getOffset(element).top - 100;
        elemBottom = elemTop + element.scrollHeight;

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
    });
  }, []);

  return (
    <>
      <section className="w-full flex justify-between items-center xs:px-4 lg:px-8 xs:mb-5 lg:mb-10 lg:justify-start lg:container lg:mx-auto relative">
        <div className="w-full flex justify-start items-start flex-row space-x-5">
          <div className="w-1/4 sticky top-10 pr-5 flex flex-col">
            {content.menu.map((menuItem: StudyContentMenuType, i: number) => {
              return (
                <li key={i} className="w-full flex">
                  <a
                    href={menuItem.link}
                    className="cursor-pointer py-4 border-b-2 border-transparent hover:border-customColors-500"
                  >
                    {menuItem.name}
                  </a>
                </li>
              );
            })}
          </div>
          <div className="flex-1 relative flex flex-col">
            {content.blocks.map((contentItem: StudyBlockType, j: number) => (
              <div
                key={j}
                id={contentItem.id || ''}
                className="w-full flex justify-start items-start flex-col space-y-4 mb-8 cs-section"
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
                  <div className="w-full flex flex-col space-y-12">
                    {contentItem.description.map((item: StudyDescriptionType, index: number) => (
                      <div className="w-full flex flex-col space-y-4" key={index}>
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
                                : 'list-disc ml-14'
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

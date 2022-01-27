import React from 'react';
import { placeholder, placeholderBig } from '../../../src/components/constants';
import { SolutionBlockType } from '../../components/libs/typeInterface';

interface ITextBlocksProps {
  labelText: string;
  title: string;
  description: string;
  blocks?: SolutionBlockType[];
  image?: string;
  isService?: boolean;
  onlyImage?: boolean;
}

const TextBlocks = (props: ITextBlocksProps) => {
  const { labelText, title, description, blocks, image, isService, onlyImage } = props;

  var img;
  if (image === '') {
    img = placeholderBig;
  } else {
    img = image;
  }
  return (
    <section
      className={
        `w-full flex justify-between items-center ${
          blocks && blocks.length > 0
            ? ' xs:px-4 lg:px-8 xs:mb-5 lg:mb-10 lg:justify-start lg:container lg:mx-auto'
            : ' flex-wrap'
        }` + `${onlyImage ? '' : ' xs:mb-5 lg:mb-10'}`
      }
    >
      <div
        className={
          `w-full flex flex-col ${
            blocks && blocks.length > 0
              ? ' '
              : ' xs:px-4 lg:px-8 lg:justify-start lg:container lg:mx-auto'
          }` + `${labelText === '' && title === '' && description === '' ? '' : ' xs:mb-5 lg:mb-8'}`
        }
      >
        <div className="w-full flex justify-start items-start flex-col space-y-4">
          {labelText && labelText !== '' && (
            <p className="text-sm uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
              {labelText}
            </p>
          )}
          {title && title !== '' && (
            <p className="font-medium text-4xl text-customColors-100 tracking-relaxed leading-snug">
              {title}
            </p>
          )}
          {description && (
            <div
              className="w-full text-base space-y-3"
              dangerouslySetInnerHTML={{ __html: description || '' }}
            />
          )}
        </div>
        {blocks && blocks.length > 0 && (
          <div className="w-full grid xs:grid-cols-1 lg:grid-cols-3 xs:gap-5 lg:gap-1 mt-10 items-start">
            {blocks.map((item: SolutionBlockType, index: number) => {
              var bimg = '';
              if (item.img === '') {
                bimg = placeholder;
              } else {
                bimg = item.img;
              }
              return (
                <div
                  key={index}
                  className="w-full flex items-start justify-start flex-wrap space-y-4"
                >
                  <div
                    className={`w-full  flex itmes-center justify-center ${
                      isService ? ' lg:h-72' : ' lg:h-72'
                    }`}
                  >
                    {/* <img src={bimg} alt={item.name} className="w-full h-full object-cover" /> */}
                    <img
                      src="http://wordpress.actionengineers.com/wp-content/uploads/2021/07/Fluke-reference-multimeter.jpg"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {isService ? (
                    <>
                      {/* {item.name !== '' && (
                        <div className="w-full flex items-start justify-start">
                          <p className="text-lg font-semibold">{item.name}</p>
                        </div>
                      )} */}
                      {/* <div className="w-full flex items-start justify-start">
                        <div
                          className="w-full text-base space-y-2"
                          dangerouslySetInnerHTML={{ __html: item.desc || '' }}
                        />
                      </div> */}
                    </>
                  ) : (
                    <>
                      {item.name !== '' && (
                        <div className="w-full flex items-start justify-start one-line">
                          <div
                            className="inline text-base space-y-2"
                            dangerouslySetInnerHTML={{
                              __html: '<b>' + item.name + ':</b> ' + item.desc || ''
                            }}
                          />
                        </div>
                      )}
                    </>
                  )}
                  {item.list && item.list.length > 0 && (
                    <ul className="w-full list-inside list-disc ml-5">
                      {item.list?.map((i: string, k: number) => (
                        <li key={k}>{i}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* {img && img !== '' && (
        <div className="w-full flex items-center justify-center relative">
          <img src={img} className="w-full h-full object-cover" />
        </div>
      )} */}
    </section>
  );
};

export default TextBlocks;

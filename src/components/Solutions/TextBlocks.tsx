import React from 'react';
import styled from 'styled-components';
import { placeholder, placeholderBig } from '../../../src/components/constants';
import { SolutionBlockType } from '../../components/libs/typeInterface';
import InstrumentCalibration from './Instrumentcalibration';
import Example from './TextBlocks1';

const ImgFlip = styled.div`
  .transparent-bg {
   
    width: 100%;
    height: 100%,
    text-align: left;
    font-size: 13px;
  }
 .hovercap {
  /* (C1) DIMENSIONS */
 top:1;
  width: 100%;
 
 
  /* (C2) PLACE AT BOTTOM */
 

 
  /* (C3) COLORS */
  background: rgba(0,15, 15, 16);
    padding: 20px;
  color: white;
}
.hovercap {
  visibility: none; opacity: 0;
  transition: opacity 0.3s;
}
.transparent-bg:hover .hovercap {
  visibility: visible; opacity: 1;
}
`;

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
            <p className="text-sm font-montserrat uppercase tracking-widest text-customColors-200 mt-6 lg:mt-4">
              {labelText}
            </p>
          )}
          {title && title !== '' && (
            <p className="font-medium font-montserrat text-4xl text-customColors-100 tracking-relaxed leading-snug">
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
                <div key={index} className="w-full  space-y-4">
                  <div className={`flex   ${isService ? 'lg:h-72 w-full' : 'lg:h-72 w-full'}`}>
                    <div className="relative  ">
                      <div className="lg:absolute lg:inset-0 ">
                        <img src={bimg} alt={item.name} className="w-96  h-full object-cover" />
                      </div>
                      <div className=" bg-gray-900 bg-opacity-10" />
                      <ImgFlip
                        className="relative  items-left text-center w-full flex"
                        style={{ height: '100%' }}
                      >
                        <div className="transparent-bg xs:hidden lg:block">
                          <div className=" hovercap h-full xs:hidden lg:block">
                            <div className="relative  text-left  text-black-100 ">
                              <div className="">
                                <h3 className="font-bold pb-3 text-white">{item.heading}</h3>
                                <ul className="font-medium text-white ">
                                  <li>{item.point1}</li>
                                  <li>{item.point2}</li>
                                  <li>{item.point3}</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ImgFlip>
                      {/* <ImgFlip className="container">
                        <img src={bimg} alt={item.name} className="w-full  h-full object-cover" />
                      </ImgFlip> */}
                    </div>

                    {/* <img
                      src="http://wordpress.actionengineers.com/wp-content/uploads/2021/07/Fluke-reference-multimeter.jpg"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                  {isService ? (
                    <>
                      {item.name !== '' && (
                        <div className="w-full lg:hidden flex items-start justify-start">
                          <p className="text-lg font-semibold">{item.name}</p>
                          {/* <p className="text-lg font-semibold">{item.point1}</p> */}
                          {/* <p className="text-lg font-semibold">{item.point2}</p>
                          <p className="text-lg font-semibold">{item.point3}</p> */}
                        </div>
                      )}
                      <div className="w-full flex lg:hidden items-start justify-start">
                        <div
                          className="w-full text-base space-y-2"
                          dangerouslySetInnerHTML={{ __html: item.desc || '' }}
                        />
                      </div>
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

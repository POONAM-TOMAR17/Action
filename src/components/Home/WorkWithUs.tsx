import React from 'react';
import styled from 'styled-components';

const Parallax = styled.p`
   {
    background-image: url('http://wordpress.actionengineers.com/wp-content/uploads/2021/07/Inquire-Us.jpg');

    min-height: 474px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
export default function WorkWithUs() {
  return (
    <div className="relative xs:mt-10 bg-indigo-800">
      <div className="absolute inset-0">
        {/* <img
          className="w-full h-full object-cover"
          src="http://wordpress.actionengineers.com/wp-content/uploads/2021/07/Inquire-Us.jpg"
          alt=""
        /> */}
        <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <Parallax className="relative  mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className=" lg:ml-0 text-md uppercase font-montserrat text-white">Working with us</p>
          <p className="lg:block lg:w-3/5 font-montserrat text-2xl leading-9 font-bold text-white mt-3 pr-4">
            Action Engineers, The First Organized, Professional Instrument Engineering Center In
            Gujarat, Since 1987
          </p>
          <div className="text-left mt-6 sm:col-span-2">
            <button
              type="submit"
              className="inline-flex font-montserrat tracking-wide leading-7 text-base font-semibold text-pink-100 uppercase justify-center py-0.5 px-5 border border-white shadow-sm text-md  rounded-sm   hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Inquire us
            </button>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

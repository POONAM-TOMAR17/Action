import React from 'react';

export const Ambience = () => {
  return (
    <section className="w-full mx-auto mt-14 md:float-left relative video-wrapper">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-start items-center flex-wrap">
        <h4 className="cr-section-title" data-aos="zoom-in-right">
          OUR CULTURE
        </h4>
      </div>
      <div
        data-aos="zoom-in"
        className="2xl:max-w-7xl 2xl:mx-auto 2xl:px-8 w-full flex justify-start items-center relative video-container"
      >
        <div className="absolute w-full h-full top-0 video-text">
          <div className="max-w-7xl w-full h-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-start items-end flex-wrap">
            <h4>Ambience</h4>
          </div>
        </div>
        <video
          controls
          controlsList="nodownload"
          className="video videoplayer w-full h-full object-cover"
          src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
        />
        {/* <div className="controls">
          <button id="play-pause" className="play">
            <svg
              className="play"
              width="56"
              height="61"
              viewBox="0 0 56 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.71802 56.5303V4.29333C2.71802 2.76697 4.35894 1.80318 5.69205 2.54654L52.4137 28.5991C53.7799 29.361 53.782 31.3258 52.4174 32.0906L5.6958 58.275C4.36263 59.0222 2.71802 58.0586 2.71802 56.5303Z"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
            <svg
              className="pause"
              width="39"
              height="54"
              viewBox="0 0 39 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="36" y="1" width="2" height="52" rx="1" stroke="white" strokeWidth="2" />
              <rect x="1" y="1" width="2" height="52" rx="1" stroke="white" strokeWidth="2" />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
};

import { useState } from '@hookstate/core';
import React from 'react';

const VideoContainer = () => {
  const isVideo = useState(false);
  return (
    <div className="w-full flex items-center justify-center relative">
      <img
        src="/images/careers/career-video-cover.jpg"
        className={`w-full h-full object-contain${
          isVideo.get() ? ' z-1 opacity-0' : ' opacity-100'
        }`}
      />
      <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
        <a
          className="cursor-pointer"
          onClick={() => {
            isVideo.set(true);
            // @ts-ignore
            document.getElementById('acto-video')?.play();
          }}
        >
          <img src="/images/play-icon.svg" alt="play-icon" className="xs:w-10 lg:w-14" />
        </a>
      </div>
      <div
        className={`w-full h-full absolute left-0 flex justify-center items-center${
          isVideo.get() ? ' opacity-100' : ' z-1 opacity-0'
        }`}
      >
        <video
          id="acto-video"
          className="w-full h-full object-cover"
          muted
          controls={isVideo.get()}
        >
          <source
            src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default VideoContainer;

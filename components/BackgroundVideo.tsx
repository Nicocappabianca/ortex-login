import React, { FC } from 'react';

const BackgroundVideo: FC = () => {
  return (
    <video className="background-video" autoPlay muted loop>
      <source src="/videos/background.mp4" type="video/mp4" />

      <style jsx>{`
        .background-video {
          position: fixed;
          right: 0;
          bottom: 0;
          min-width: 100%;
          min-height: 100%;
        }
      `}</style>
    </video>
  );
};

export default BackgroundVideo;

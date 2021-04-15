import React, { FC } from 'react';

const BackgroundVideo: FC = () => {
  return (
    <video className="background-video" autoPlay muted loop>
      <source src="/videos/background.mp4" type="video/mp4" />
      <source src="/videos/background.webm" type="video/webm" />
      <source src="/videos/background.ogg" type="video/ogg" />

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

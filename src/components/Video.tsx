import React from 'react';
import ReactPlayer from 'react-player/youtube';

interface Props {
  url: string;
}

export const Video = (props: Props) => {
  const { url } = props;

  return (
    <div className="relative w-full h-full">
      <ReactPlayer height="100%" url={url} volume={0.1} width="100%" />
    </div>
  );
};

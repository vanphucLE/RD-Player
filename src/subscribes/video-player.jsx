import React from 'react';
import ReactPlayer from 'react-player';
import { Subscribe } from 'unstated';
import MainContainer from '../containers/main-container';

const style = {
  position: 'fixed',
  top: '0px',
  left: '0px',
  backgroundColor: 'black'
};


const VideoPlayer = ({ }) => {
  return (
    <Subscribe to={[MainContainer]}>
      {(mainContainer) => (
        <ReactPlayer
          url='https://kumullus-staging.s3.eu-west-3.amazonaws.com/43216f12-97ad-4d78-b6ec-9c628c5e5ad2'
          {...{ style }}
          playing = {mainContainer.state.isPlaying}
          onProgress = {val => mainContainer.setCurrentTime(val)}
          width='100%'
          height='100%'
        />
      )}
    </Subscribe>
  );
};

export default VideoPlayer;

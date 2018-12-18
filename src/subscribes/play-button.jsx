import React from 'react';
import { Subscribe } from 'unstated';
import TodoContainer from '../containers/main-container';

const PlayButton = ({}) => {
  return (
    <Subscribe to={[TodoContainer]}>
      {(todoContainer) => (
        <button
          style={{ position: 'relative', zIndex: '2' }}
          onClick={todoContainer.tooglePlay}
        >
          {todoContainer.state.isPlaying ? 'Pause' : 'Play'}
        </button>
      )}
    </Subscribe>
  );
};

export default PlayButton;

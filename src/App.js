import React, { Component } from 'react';
import { Provider } from 'unstated';

import './App.css';

import VideoPlayer from './subscribes/video-player';
import PlayButton from './subscribes/play-button';
import Popups from './subscribes/popups';
import Cibles from './subscribes/cibles';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className='App'>
          <PlayButton />
          <Cibles />
          <Popups />
          <VideoPlayer />
        </div>
      </Provider>
    );
  }
}

export default App;

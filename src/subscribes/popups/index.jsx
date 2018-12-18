import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import MainContainer from '../../containers/main-container';

import Todos from './todos';

export const POPUPS = [
  {
    id: 1,
    contain: Todos
  }
];

class Popups extends Component {
  render() {
    return (
      <Subscribe to={[MainContainer]}>
        {(mainContainer) =>
          POPUPS.filter((popup) =>
            mainContainer.state.activePopupIds.includes(popup.id)
          ).map((popup, key) => <popup.contain  key={key}  />)
        }
      </Subscribe>
    );
  }
}

export default Popups;

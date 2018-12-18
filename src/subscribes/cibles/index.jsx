import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import MainContainer from '../../containers/main-container';

import Todos from './todos';

export const CIBLES = [
  {
    id: 1,
    start: 1,
    contain: Todos
  }
];

class Cibles extends Component {
  render() {
    return (
      <Subscribe to={[MainContainer]}>
        {(mainContainer) =>
          CIBLES.filter(
            (cible) =>
              cible.start <= mainContainer.state.currentTime 
          ).map((cible, key) => (
            <cible.contain
              key={key}
              activePopupIds={mainContainer.state.activePopupIds}
              addRemoveActivePopupId={mainContainer.addRemoveActivePopupId}
            />
          ))
        }
      </Subscribe>
    );
  }
}

export default Cibles;

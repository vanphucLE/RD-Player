import React, { Component } from 'react';

import { POPUPS } from '../../popups';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.popupId = POPUPS[0].id;
  }

  render() {
    const buttonText = this.props.activePopupIds.includes(this.popupId)
      ? 'Masquer'
      : 'Afficher Todo';
    return (
      <button
        onClick={() => this.props.addRemoveActivePopupId(this.popupId)}
        style={{ position: 'relative', zIndex: '2', margin: '10px' }}
      >
        {buttonText}
      </button>
    );
  }
}

export default Todos;

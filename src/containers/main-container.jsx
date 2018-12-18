import { Container } from 'unstated';

class MainContainer extends Container {
  state = {
    isPlaying: false,
    currentTime: 0,
    activePopupIds: []
  };

  addRemoveActivePopupId = (popupId) => {
    const activePopupIds = this.state.activePopupIds.includes(popupId)
      ? this.state.activePopupIds.filter((id) => id !== popupId)
      : [...this.state.activePopupIds, popupId];

    this.setState({ activePopupIds });
  };

  tooglePlay = () => {
    this.setState({ isPlaying: !this.state.isPlaying });
  };

  setCurrentTime = (val) => {
    this.setState({ currentTime: val.playedSeconds });
  };
}

export default MainContainer;

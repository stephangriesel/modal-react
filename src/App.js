import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isShowing: false
    }
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  }

  render() {
    return (
      <div className="App">
        <React.Fragment>
          {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}
          <img
            src="https://picsum.photos/id/237/200/300"
            className="open-modal-btn"
            onClick={this.openModalHandler}
            alt="dog"
          />
          <Modal
            className="modal"
            show={this.state.isShowing}
            close={this.closeModalHandler}
          >
            Message from modal
        </Modal>

        </React.Fragment>
      </div>
    );

  }

}

export default App;

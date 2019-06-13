import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';

class App extends Component {
  state = {
    show:false
  }
  showModal = () => {
    this.setState({
      ...this.setState,
      show: !this.state.show
    });
  }
  render() {
    return (
      <div className="App">
        <React.Fragment>
        <img 
        src="https://picsum.photos/id/237/200/300"
        onClick={this.showModal}
        />
        <Modal 
        show={this.state.show}>
          Message from modal
        </Modal>
      
        </React.Fragment>
      </div>
    );

  }
  
}

export default App;

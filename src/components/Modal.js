import React, { Component } from 'react';
import '../css/Modal.css';

class Modal extends Component {
    render() {
        if (this.props.show) {
            return null;
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Modal;
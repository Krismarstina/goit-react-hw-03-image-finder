import React, { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  state = {};

  keydownClick = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  backdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.keydownClick);
  }

  componentWillUnmount() {
    window.addEventListener('keydown', this.keydownClick);
  }

  render() {
    return (
      <Overlay onClick={this.backdropClick}>
        <ModalWindow>
          <img src={this.props.image.url} alt={this.props.image.alt} />
        </ModalWindow>
      </Overlay>
    );
  }
}

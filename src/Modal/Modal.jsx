import React, { Component } from "react";
import { createPortal } from "react-dom";
import css from "./styles.module.css";
const modalRoot = document.querySelector("#modal-root");
class Modal extends Component {
    componentDidMount(){
        window.addEventListener('keydown',this.handleKeyDown)

    }
    componentWillUnmount(){
        window.removeEventListener('keydown',this.handleKeyDown)
    }
    handleKeyDown = e=>{
        if (e.code === 'Escape') {
            this.props.onClose()
        }
    }

    handleBackDropClick = e=>{
        if (e.currentTarget === e.target) {
            this.props.onClose()
        }
    }
  render() {
    return createPortal(
      <div className={css.ModalOverlay} onClick={this.handleBackDropClick}>
        <div className={css.ModalContent}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

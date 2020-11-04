import React, { useRef, useEffect, useState } from 'react';
import { TweenMax, Power3 } from 'gsap'
import Iframe from 'react-iframe'

const Modal = ({ videoSrc }) => {
  const [isOpen, setIsOpen] = useState(false);


  const closeModal = () => {
    TweenMax.to('.modal', 3, { top: '-150%', ease: Power3.easeOut })
    TweenMax.to('.overlay', 3, { backgroundColor: 'rgba(0, 0, 0, 0)' })
    const timeout = setTimeout(() => {
      setIsOpen(false);

    }, 1000);
    return () => {
      clearTimeout(timeout);
    }

  }

  return (
    <>
      <button onClick={() => {
        setIsOpen(true)
        TweenMax.to('.modal', .9, { top: '50%', ease: Power3.easeOut });
        TweenMax.to('.overlay', 1, {backgroundColor: 'rgba(0, 0, 0, 0.5'})
      }}>Show Modal </button>
      <div className={`${isOpen ? 'overlay' : ''} `} >
        <div className={`modal ${isOpen ? 'show' : 'hide'}`} >
          {/* IFRAME NPM PACKAGE  */}

          <Iframe url={videoSrc}
            width=""
            height=""
            id="myId"
            className="iframe"
            position="absolute" />

          <div className="closeButtonContainer">
            <button onClick={closeModal}>X</button>
          </div>
        </div>
      </div>
    </>
  )
}


export default Modal

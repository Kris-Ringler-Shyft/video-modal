import React, { useRef, useEffect, useState } from 'react';
import { TweenMax, Power3 } from 'gsap'
import Iframe from 'react-iframe'

const Modal = ({ videoSrc }) => {
  const [isOpen, setIsOpen] = useState(false);
  let overlay = useRef(null);
  let modal = useRef(null);

  //toggles modal open or closed

  function toggle() {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  //componentDidMount animations

  useEffect(() => {
    const open = document.querySelector('.open');
    const close = document.querySelector('.close');

    open.addEventListener('click', function () {
      TweenMax.to(modal, .9, { top: '50%', ease: Power3.easeOut });
      TweenMax.to(overlay, .9, { backgroundColor: 'rgba(0, 0, 0, 0.5)' })
    })
    close.addEventListener('click', function () {

      TweenMax.to(modal, 3.5, { top: '-200%', ease: Power3.easeOut })
      TweenMax.to(overlay, 3.5, { backgroundColor: 'rgba(0, 0, 0, 0)' })
        .then(() => toggle());
    })
  })

  return (
    <>
      <button onClick={toggle} className="open">Show Modal </button>
      <div className={`${isOpen ? 'overlay' : ''} `} ref={element => overlay = element}>
        <div className={`modal ${isOpen ? 'show' : 'hide'}`} ref={element => modal = element} >
          {/* IFRAME NPM PACKAGE  */}

          <Iframe url={videoSrc}
            width=""
            height=""
            id="myId"
            className="iframe"
            position="absolute" />

          <div className="closeButtonContainer">
            <button className="close" >X</button>
          </div>

        </div>
      </div>
    </>
  )
}


export default Modal

import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }
  return (
    <>

      <button onClick={toggle}>Show Modal </button>
      <div className={`${isOpen ? 'overlay' : ''} `}>



        <div className={`modal ${isOpen ? 'show overlay' : 'hide'}`} onClose={toggle}>
          <div className="videoContainer">

          </div>
          <button onClick={toggle} className="closeButton">Close Modal</button>
        </div>

      </div>
    </>
  )
}


export default Modal

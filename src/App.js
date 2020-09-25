import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap'
import './App.css';
import Modal from './modal';


function App() {
  const video = {
    url: "http://www.youtube.com/embed/xDMP3i36naA"
  }
  // let logoItem = useRef(null)
  // console.log(logoItem);
  // useEffect(() => {
  //   TweenMax.to(
  //     logoItem,
  //     .8,
  //     {
  //       opacity: 1,
  //       y: -20,
  //       ease: Power3.easeOut
  //     }
  //   )
  // }, [])
  return (
    <div className="App">

      <Modal videoSrc={video.url} />
    </div>
  );
}

export default App;

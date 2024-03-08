import React from 'react';
import Arrow from "./arrow.png"
import Refresh from "./refresh.png"
import Stop from "./stop-button.png"

function BtnComponent(props) {
  return (
    <div className='Btns'>
      {(props.status === 0) ?
        <button className="stopwatch-btn stopwatch-btn-gre"
          onClick={props.start}>
          <img className='Icon' src={Arrow} alt="Start" />
          Start</button> : ""
      }

      {(props.status === 1) ?
        <div className='StopReset'>
          <button className="stopwatch-btn stopwatch-btn-red"
            onClick={props.stop}>
            <img className='Icon' src={Stop} alt="Stop" />
            Stop</button>
          <button className="stopwatch-btn stopwatch-btn-yel"
            onClick={props.reset}>
            <img className='Icon' src={Refresh} alt="Reset" />
            Reset</button>
        </div> : ""
      }

      {(props.status === 2) ?
        <div className='StopReset'>
          <button className="stopwatch-btn stopwatch-btn-gre"
            onClick={props.resume}>
          <img className='Icon' src={Arrow} alt="Start" />
              Resume</button>
          <button className="stopwatch-btn stopwatch-btn-yel"
            onClick={props.reset}>
          <img className='Icon' src={Refresh} alt="Reset" />
            Reset</button>
        </div> : ""
      }

    </div>
  );
}

export default BtnComponent;
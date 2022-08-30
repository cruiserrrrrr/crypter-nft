import React from "react";
import './Timer.scss'

const Timer = ({ hours = 0, minutes = 0, seconds = 0 }) => {
    const [paused, setPaused] = React.useState(false);
    const [over, setOver] = React.useState(false);
    const [[h, m, s], setTime] = React.useState([hours, minutes, seconds]);
  
    const tick = () => {
      if (paused || over) return;
  
      if (h === 0 && m === 0 && s === 0) {
        setOver(true);
      } else if (m === 0 && s === 0) {
        setTime([h - 1, 59, 59]);
      } else if (s == 0) {
        setTime([h, m - 1, 59]);
      } else {
        setTime([h, m, s - 1]);
      }
    };
  
    const reset = () => {
      setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
      setPaused(false);
      setOver(false);
    };
  
    React.useEffect(() => {
      const timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    });
  
    return (
      <div className="timer_wrapper">
        <div className="time_item">
            <p className="time">{h.toString().padStart(2, '0')}</p>
            <p className="time_number">Hrs</p>
        </div>
        <div className="time_item">
          <p className="time">{m.toString().padStart(2, '0')}</p>
          <p className="time_number">mins</p>
        </div>
        <div className="time_item">
          <p className="time">{s.toString().padStart(2, '0')}</p>
          <p className="time_number">secs</p>
        </div>
        {/* <div>{over ? "Time's up!" : ''}</div> */}
      </div>
    );
  };

export default Timer;
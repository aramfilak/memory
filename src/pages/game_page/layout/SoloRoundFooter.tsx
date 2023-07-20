import './GamePageFooter.scss';
import { useEffect, useState } from 'react';
import useRoundData from '../../../store/useRoundData';
import useStartMenuOptions from '../../../store/useStartMenuOptions';

function SoloRoundFooter() {
  const { visibleMenu } = useStartMenuOptions();
  const { restart, setSoloPlayerTimeElapsed, gameIsStarted, gameIsFinished, soloPlayerScores } =
    useRoundData();
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  const timeToString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  useEffect(() => {
    ResetFooter();
  }, [visibleMenu, restart]);

  useEffect(() => {
    if (gameIsStarted && !gameIsFinished) {
      const intervalId = setInterval(() => {
        if (seconds === 59) {
          setSeconds(() => 0);
          setMinutes((prvMin) => prvMin + 1);
        } else {
          setSeconds((prvSec) => prvSec + 1);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
    if (gameIsFinished) {
      setSoloPlayerTimeElapsed(timeToString);
    }
  }, [seconds, minutes, gameIsStarted, gameIsFinished]);

  function ResetFooter() {
    setSeconds(0);
    setMinutes(0);
  }
  return (
    <footer className="solo-round-footer">
      <div className="info">
        <span className="title">Time</span>
        <time className="value">{timeToString}</time>
      </div>
      <div className="info">
        <span className="title">Moves</span>
        <span className="value">{soloPlayerScores.moves}</span>
      </div>
    </footer>
  );
}

export default SoloRoundFooter;

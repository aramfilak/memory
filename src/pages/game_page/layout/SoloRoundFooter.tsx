import './GamePageFooter.scss'
import React, { useEffect, useState } from 'react'
import useRoundData from '../../../store/useRoundData'
import useStartMenuOptions from '../../../store/useStartMenuOptions'
const SoloRoundFooter: React.FC = () => {
  const { visibleMenu } = useStartMenuOptions()
  const { setSoloPlyerTimeElapsed, gameIsStarted, gameIsFinished, soloPlyerScores } = useRoundData()
  const [seconds, setSeconds] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)

  const timeToString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  const ResetFooter = () => {
    setSeconds(0)
    setMinutes(0)
  }

  useEffect(() => {
    ResetFooter()
  }, [visibleMenu])

  useEffect(() => {
    if (gameIsStarted) {
      const intervalId = setInterval(() => {
        if (seconds === 59) {
          setSeconds(() => 0)
          setMinutes((prvMin) => prvMin + 1)
        } else {
          setSeconds((prvSec) => prvSec + 1)
        }
      }, 1000)
      return () => clearInterval(intervalId)
    }
    if (gameIsFinished) {
      setSoloPlyerTimeElapsed(timeToString)
    }
  }, [seconds, minutes, gameIsStarted, gameIsFinished])

  return (
    <footer className="solo-round-footer">
      <div className="info">
        <span className="title">Time</span>
        <time className="value">{timeToString}</time>
      </div>
      <div className="info">
        <span className="title">Moves</span>
        <span className="value">{soloPlyerScores.moves}</span>
      </div>
    </footer>
  )
}

export default SoloRoundFooter

import './GamePageFooter.scss'
import React from 'react'

interface Props {
  time: string
  moves: number
}
const SinglePlyerFooter: React.FC<Props> = ({ time, moves }) => {
  return (
    <footer className="solo-round-footer">
      <div className="info">
        <span className="title">Time</span>
        <time className="value">{time}</time>
      </div>
      <div className="info">
        <span className="title">Moves</span>
        <span className="value">{moves}</span>
      </div>
    </footer>
  )
}

export default SinglePlyerFooter

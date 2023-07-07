import './GamePageFooter.scss'
import React from 'react'

const SoloRoundFooter: React.FC = () => {
  return (
    <footer className="solo-round-footer">
      <div className="info">
        <span className="title">Time</span>
        <time className="value">{22}</time>
      </div>
      <div className="info">
        <span className="title">Moves</span>
        <span className="value">{22}</span>
      </div>
    </footer>
  )
}

export default SoloRoundFooter

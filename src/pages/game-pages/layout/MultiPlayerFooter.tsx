import useIsMobile from '../../../hooks/useIsMobile'
import './GamePageFooter.scss'
import React from 'react'

interface Props {
  numberOfPlayers: number
}
const MultiPlayerFooter: React.FC<Props> = ({ numberOfPlayers }) => {
  const { isMobile } = useIsMobile()

  const playersInfos = () => {
    const infos: Array<React.ReactNode> = []
    for (let i = 1; i <= numberOfPlayers; i++) {
      infos.push(
        <div className="info" key={i}>
          <span className="title">{`${isMobile ? 'P' : 'Player'} ${i}`}</span>
          <span className="value">{4}</span>
        </div>
      )
    }
    return infos
  }

  return <footer className="multi-round-footer">{playersInfos()}</footer>
}

export default MultiPlayerFooter

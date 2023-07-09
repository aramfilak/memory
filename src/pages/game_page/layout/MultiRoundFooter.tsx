import './GamePageFooter.scss'
import React from 'react'
import useIsMobile from '../../../hooks/useIsMobile'
import useStartMenuOptions from '../../../store/useStartMenuOptions'
import useRoundData from '../../../store/useRoundData'
const MultiRoundFooter: React.FC = () => {
  const { numberOfPlayers } = useStartMenuOptions()
  const { currentPlyer, plyersScores } = useRoundData()
  const { isMobile } = useIsMobile()

  const playersInfos = () => {
    const infos: Array<React.ReactNode> = []
    for (let plyerNo = 1; plyerNo <= numberOfPlayers; plyerNo++) {
      infos.push(
        <div className={`info ${plyerNo === currentPlyer ? 'active' : ''}`} key={plyerNo}>
          <span className="title">{`${isMobile ? 'P' : 'Player'} ${plyerNo}`}</span>
          <span className="value">{plyersScores[plyerNo - 1].moves}</span>
          {!isMobile && plyerNo === currentPlyer && (
            <span className="current-turn">CURRENT TURN</span>
          )}
        </div>
      )
    }
    return infos
  }

  return <footer className="multi-round-footer">{playersInfos()}</footer>
}

export default MultiRoundFooter

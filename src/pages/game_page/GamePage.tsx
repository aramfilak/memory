import React from 'react'
import SoloRoundFooter from './layout/SoloRoundFooter'
import MultiRoundFooter from './layout/MultiRoundFooter'
import GamePageBody from './layout/GamePageBody'
import useStartMenuOptions from '../../store/useStartMenuOptions'
const GamePage: React.FC = () => {
  const { isSoloRound } = useStartMenuOptions()
  return (
    <div className="game-page">
      <div className="container">
        <GamePageBody />
        {isSoloRound ? <SoloRoundFooter /> : <MultiRoundFooter />}
      </div>
    </div>
  )
}

export default GamePage

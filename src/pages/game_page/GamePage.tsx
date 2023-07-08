import React from 'react'
import SoloRoundFooter from './layout/SoloRoundFooter'
import MultiRoundFooter from './layout/MultiRoundFooter'
import GamePageBody from './layout/GamePageBody'
import useStartMenuOptions from '../../store/useStartMenuOptions'
const GamePage: React.FC = () => {
  const { isSoloRound } = useStartMenuOptions()
  return (
    <div className="game-page">
      <GamePageBody />
      {isSoloRound ? <SoloRoundFooter /> : <MultiRoundFooter />}
    </div>
  )
}

export default GamePage

import './GamePageBody.scss'
import React, { useState } from 'react'
import WindowModalWrapper from '../../../components/WindowModalWrapper.tsx'
import MemoryGrid from '../../../components/MemoryGrid.tsx'
import useStartMenuOptions from '../../../store/useStartMenuOptions.tsx'
import useRoundData from '../../../store/useRoundData.tsx'

const GamePageBody: React.FC = () => {
  const [closeModal, setCloseModal] = useState<boolean>(true)
  const { setMenuVisibility } = useStartMenuOptions()
  const { restartGame } = useRoundData()

  return (
    <>
      <header className="game-page-header">
        <h1 className="logo">memory</h1>
        <nav className="mobile-nav">
          <button
            type="button"
            className="btn sm primary"
            onClick={() => setCloseModal(!closeModal)}
          >
            Menu
          </button>
          <WindowModalWrapper close={closeModal}>
            <button
              type="button"
              className="btn sm primary"
              onClick={() => {
                restartGame()
                setCloseModal(!closeModal)
              }}
            >
              Restart
            </button>
            <button
              type="button"
              className="btn sm secondary"
              onClick={() => {
                setMenuVisibility(true)
                setCloseModal(true)
              }}
            >
              New Game
            </button>
            <button type="button" className="btn sm secondary" onClick={() => setCloseModal(true)}>
              Resume Game
            </button>
          </WindowModalWrapper>
        </nav>
        <nav className="tab-desk-nav">
          <button type="button" className="btn sm primary" onClick={() => restartGame()}>
            Restart
          </button>
          <button
            type="button"
            className="btn  sm secondary"
            onClick={() => setMenuVisibility(true)}
          >
            New Game
          </button>
        </nav>
      </header>
      <MemoryGrid />
    </>
  )
}

export default GamePageBody

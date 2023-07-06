import './GamePageHeader.scss'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import WindowModalWrapper from '../../../components/WindowModalWrapper.tsx'
import { useNavigate } from 'react-router-dom'
const GamePageHeader: React.FC = () => {
  const [closeModal, setCloseModal] = useState<boolean>(true)
  const navigate = useNavigate()
  return (
    <>
      <div className="container">
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
              <button type="button" className="btn sm primary">
                Restart
              </button>
              <button type="button" className="btn sm secondary">
                New Game
              </button>
              <button
                type="button"
                className="btn sm secondary"
                onClick={() => setCloseModal(!closeModal)}
              >
                Resume Game
              </button>
            </WindowModalWrapper>
          </nav>
          <nav className="tab-desk-nav">
            <button type="button" className="btn sm primary">
              Restart
            </button>
            <button type="button" className="btn  sm secondary" onClick={() => navigate('/')}>
              New Game
            </button>
          </nav>
        </header>
        <Outlet />
      </div>
    </>
  )
}

export default GamePageHeader

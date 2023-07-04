import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { LogoDark } from '../assets/icons.tsx'
import WindowModalWrapper from './WindowModalWrapper.tsx'

const GamePageHeader: React.FC = () => {
  const [closeModal, setCloseModal] = useState<boolean>(true)
  return (
    <>
      <LogoDark />
      <button type="button" className="btn sm primary" onClick={() => setCloseModal(!closeModal)}>
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
      <Outlet />
    </>
  )
}

export default GamePageHeader

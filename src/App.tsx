import './App.scss'
import React from 'react'
import StartGame from './pages/StartGame'
import { Route, Routes } from 'react-router-dom'
import SoloRound from './pages/game-pages/SoloRound'
import MultiRound from './pages/game-pages/MultiRound'
import GamePageHeader from './pages/game-pages/layout/GamePageHeader'

const App: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<StartGame />} />
        <Route element={<GamePageHeader />}>
          <Route path="solo-round" element={<SoloRound />} />
          <Route path="multi-round" element={<MultiRound />} />
        </Route>
        <Route path="*" element={<h1 style={{ textAlign: 'center' }}>NOT FOUND 404</h1>} />
      </Routes>
    </main>
  )
}

export default App

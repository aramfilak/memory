import './App.scss'
import React from 'react'
import StartGame from './pages/StartGame'
import { Route, Routes } from 'react-router-dom'
import SinglePlayer from './pages/SinglePlayer'
import MultiplePlayers from './pages/MultiplePlayers'
import GamePageHeader from './components/GamePageHeader'

const App: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<StartGame />} />
        <Route element={<GamePageHeader />}>
          <Route path="solo-round" element={<SinglePlayer />} />
          <Route path="multi-round" element={<MultiplePlayers />} />
        </Route>
        <Route path="*" element={<h1 style={{ textAlign: 'center' }}>NOT FOUND 404</h1>} />
      </Routes>
    </main>
  )
}

export default App

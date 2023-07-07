import './App.scss'
import React from 'react'
import MenuWrapper from './components/MenuWrapper'
import GamePage from './pages/game_page/GamePage'
import StartMenu from './components/StartMenu'
const App: React.FC = () => {
  return (
    <main className="memory-game">
      <GamePage />
      <MenuWrapper>
        <StartMenu />
      </MenuWrapper>
    </main>
  )
}

export default App

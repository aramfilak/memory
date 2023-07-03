import './StartGame.scss'
import React from 'react'
import StartMenu from '../components/StartMenu'

const StartGame: React.FC = () => {
  return (
    <main className="start-page">
      <h1 className="main-title">memory</h1>
      <StartMenu />
    </main>
  )
}

export default StartGame

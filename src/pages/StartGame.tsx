import './StartGame.scss'
import React from 'react'
import StartMenu from '../components/StartMenu'

const StartGame: React.FC = () => {
  return (
    <main className="start-page">
      <h1 className="logo">memory</h1>
      <StartMenu />
    </main>
  )
}

export default StartGame

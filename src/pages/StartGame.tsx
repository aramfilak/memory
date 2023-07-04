import './StartGame.scss'
import React from 'react'
import StartMenu from '../components/StartMenu'
import { LogoLight } from '../assets/icons.tsx'

const StartGame: React.FC = () => {
  return (
    <main className="start-page">
      <LogoLight />
      <StartMenu />
    </main>
  )
}

export default StartGame

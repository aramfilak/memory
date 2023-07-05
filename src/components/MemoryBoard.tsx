import React from 'react'
import { generateNumbersBoard } from '../helpers/helpers'

interface Props {
  boardSize: string
  boardTheme: string
  soloMode: boolean
}

const MemoryBoard: React.FC<Props> = ({ boardSize, boardTheme, soloMode }) => {
  const generateBoard = () => {}

  return <div className="memory-board"></div>
}

export default MemoryBoard

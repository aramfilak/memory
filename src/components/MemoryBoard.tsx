import './MemoryBoard.scss'
import React, { useEffect, useState } from 'react'
import { generateNumbersBoard } from '../helpers/helpers'

interface Props {
  gridSize: number
  theme: string
  soloMode: boolean
}

const MemoryBoard: React.FC<Props> = ({ gridSize, theme, soloMode }) => {
  const [numberGrid] = useState<number[]>(generateNumbersBoard(gridSize))
  const [showCells, setShowCells] = useState<Set<number>>()
  const generatedIconsGrid = () => {
    console.log()
  }

  const handleCellClick = (cellID: number) => {
    const newShowCells = new Set<number>()
    newShowCells.add(cellID)
    setShowCells(newShowCells)
  }

  const generatedNumberGrid = numberGrid.map((num) => {
    return (
      <div
        className={`grid-cell  size__${gridSize} ${showCells?.has(num) ? 'show' : ''}`}
        onClick={() => handleCellClick(num)}
      >
        {num}
      </div>
    )
  })

  return <div className={`memory-grid size__${gridSize}`}>{generatedNumberGrid}</div>
}

export default MemoryBoard

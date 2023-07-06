import './MemoryGrid.scss'
import React, { useEffect, useState } from 'react'
import { generateNumbersGrid } from '../helpers/helpers'

interface Props {
  gridSize: number
  theme: string
  multiMode: boolean
}

const MemoryGrid: React.FC<Props> = ({ gridSize, theme, multiMode }) => {
  const [numberGrid] = useState<number[]>(generateNumbersGrid(gridSize))
  const [showCell, setShowCell] = useState<number>()
  const [visitedCell, setVisitedCell] = useState<number>(-1)
  const [complicatedCells, setComplicatedCells] = useState<Set<number>>()

  const handleCellClick = (cellID: number, cellValue: number) => {
    setShowCell(cellID)

    if (visitedCell === -1) {
      setVisitedCell(cellValue)
    } else if (visitedCell === cellValue) {
      const newSet = new Set<number>(complicatedCells)
      newSet.add(cellValue)
      setComplicatedCells(newSet)
    } else {
      setVisitedCell(-1)
    }
  }

  const generatedNumberGrid = numberGrid.map((cellValue, cellID) => {
    return (
      <div
        key={cellID}
        className={`grid-cell  size__${gridSize} ${
          showCell === cellID || complicatedCells?.has(cellValue) ? 'show' : ''
        }`}
        onClick={() => handleCellClick(cellID, cellValue)}
      >
        {cellValue}
      </div>
    )
  })

  return <div className={`memory-grid size__${gridSize}`}>{generatedNumberGrid}</div>
}

export default MemoryGrid

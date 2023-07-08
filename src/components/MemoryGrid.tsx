import './MemoryGrid.scss'
import React, { useEffect, useState } from 'react'
import { generateIconsGrid, generateNumbersGrid } from '../helpers/helpers'
import useStartMenuOptions from '../store/useStartMenuOptions'

const NUMBERS = 'NUMBERS'
const ICONS = 'ICONS'
const MemoryGrid: React.FC = () => {
  const { gridSize, gridTheme } = useStartMenuOptions()
  const [gridCells, setGridCells] = useState<React.ReactNode[] | number[]>([])
  const [clickedCells, setClickedCells] = useState<Set<number>>(new Set())
  const [clickedCellsValues, setClickedCellsValues] = useState<Array<number>>([])
  const [completedCells, setCompletedCells] = useState<Set<number | string>>(new Set())

  useEffect(() => {
    if (gridTheme === NUMBERS) {
      setGridCells(generateNumbersGrid(gridSize))
    } else if (gridTheme === ICONS) {
      setGridCells(generateIconsGrid(gridSize))
    }
  }, [gridSize, gridTheme])
  useEffect(() => {
    if (clickedCells.size === 2) {
      setTimeout(() => {
        if (clickedCellsValues[0] === clickedCellsValues[1]) {
          setCompletedCells(new Set(completedCells).add(clickedCellsValues[0]))
        }
        // Reset
        setClickedCells(new Set())
        setClickedCellsValues([])
      }, 1000)
    }
  }, [clickedCellsValues, clickedCells, completedCells])

  const handleCellClick = (cellValue: number, cellIndex: number) => {
    if (clickedCells.size < 2) {
      setClickedCells(new Set(clickedCells).add(cellIndex))
      setClickedCellsValues([...clickedCellsValues, cellValue])
    }
  }

  const generatedNumberGrid = gridCells.map((cellValue, cellIndex) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const cellVal = gridTheme === NUMBERS ? cellValue : cellValue?.type?.name
    return (
      <div
        key={cellIndex}
        className={`grid-cell  size__${gridSize} ${
          clickedCells.has(cellIndex) || completedCells?.has(cellVal) ? 'show' : ''
        }`}
        onClick={() => handleCellClick(cellVal, cellIndex)}
      >
        {cellValue}
      </div>
    )
  })

  return <div className={`memory-grid size__${gridSize}`}>{generatedNumberGrid}</div>
}

export default MemoryGrid

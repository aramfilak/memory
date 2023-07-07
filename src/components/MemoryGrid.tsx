import './MemoryGrid.scss'
import React, { useEffect, useState } from 'react'
import { generateIconsGrid, generateNumbersGrid } from '../helpers/helpers'
import useStartMenuOptions from '../store/useStartMenuOptions'

const MemoryGrid: React.FC = () => {
  const { gridSize, gridTheme } = useStartMenuOptions()
  const [gridCells, setGridCells] = useState<React.ReactNode[] | number[]>([])

  useEffect(() => {
    if (gridTheme === 'NUMBERS') {
      setGridCells(generateNumbersGrid(gridSize))
    } else if (gridTheme === 'ICONS') {
      setGridCells(generateIconsGrid(gridSize))
    }
  }, [gridSize, gridTheme])

  const generatedNumberGrid = gridCells.map((cellValue, index) => {
    return (
      <React.Fragment key={index}>
        <div className={`grid-cell  show  size__${gridSize}`}>{cellValue}</div>
      </React.Fragment>
    )
  })

  return <div className={`memory-grid size__${gridSize}`}>{generatedNumberGrid}</div>
}

export default MemoryGrid

// import { useEffect } from 'react'
// import { create } from 'zustand'
// import useStartMenuOptions from './useStartMenuOptions'
// import { generateIconsGrid, generateNumbersGrid } from '../helpers/helpers'

// interface State {
//   gridCells: React.ReactNode[] | number[]
//   clickedCells: Set<number>
//   clickedCellsValues: Array<number>
//   completedCells: Set<number | string>
// }

// interface Actions {
//   handleCellClick: (cellValue: number, cellIndex: number) => void
// }

// const NUMBERS = 'NUMBERS'
// const ICONS = 'ICONS'

// const useRoundData = create<State & Actions>((set) => {
//   const { gridSize, gridTheme } = useStartMenuOptions()

//   let gridCellsInitialValue: React.ReactNode[] | number[] = []
//   useEffect(() => {
//     if (gridTheme === NUMBERS) {
//       gridCellsInitialValue = generateNumbersGrid(gridSize)
//     } else if (gridTheme === ICONS) {
//       gridCellsInitialValue = generateIconsGrid(gridSize)
//     }
//   }, [gridSize, gridTheme])

//   return {
//     gridCells: gridCellsInitialValue,
//     clickedCells: new Set(),
//     clickedCellsValues: [],
//     completedCells: new Set(),
//   }
// })

// export default useRoundData

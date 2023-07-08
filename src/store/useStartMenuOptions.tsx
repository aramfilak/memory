import { create } from 'zustand'

interface State {
  gridTheme: string
  numberOfPlayers: number
  gridSize: number
  visibleMenu: boolean
  isSoloRound: boolean
}

interface Actions {
  setGridTheme: (val: string) => void
  setNumberOfPlyers: (val: number) => void
  setGridSize: (val: number) => void
  setMenuVisibility: (val: boolean) => void
}

const useStartMenuOptions = create<State & Actions>((set) => ({
  visibleMenu: true,
  gridTheme: '',
  numberOfPlayers: 0,
  gridSize: 0,
  isSoloRound: false,

  setMenuVisibility: (val: boolean) => {
    set(() => ({
      visibleMenu: val,
    }))
  },
  setGridTheme: (val: string) => {
    set(() => ({
      gridTheme: val,
    }))
  },
  setNumberOfPlyers: (val: number) => {
    set(() => ({
      numberOfPlayers: val,
      isSoloRound: val === 1,
    }))
  },
  setGridSize: (val: number) => {
    set(() => ({
      gridSize: val,
    }))
  },
}))

export default useStartMenuOptions

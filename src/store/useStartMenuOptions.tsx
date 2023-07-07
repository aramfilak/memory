import { create } from 'zustand'

interface State {
  gridTheme: string
  numberOfPlayers: number
  gridSize: number
  visibleMenu: boolean
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
    }))
  },
  setGridSize: (val: number) => {
    set(() => ({
      gridSize: val,
    }))
  },
}))

export default useStartMenuOptions

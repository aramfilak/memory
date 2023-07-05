import { create } from 'zustand'

interface State {
  theme: string
  numberOfPlayers: number
  gridSize: number
}

interface Actions {
  setRoundSettings: (currentRoundSettings: Map<string, string | number>) => void
}

const useStartGame = create<State & Actions>((set) => {
  return {
    theme: '',
    numberOfPlayers: 0,
    gridSize: 0,

    setRoundSettings: (currentRoundSettings: Map<string, string | number>) => {
      let gridSizeVal = 0
      switch (currentRoundSettings.get('Grid Size')) {
        case '4x4':
          gridSizeVal = 16
          break
        case '6x6':
          gridSizeVal = 36
          break
      }

      set(() => ({
        theme: String(currentRoundSettings.get('Select Theme')),
        numberOfPlayers: Number(currentRoundSettings.get('Number of Players')),
        gridSize: gridSizeVal,
      }))
    },
  }
})

export default useStartGame

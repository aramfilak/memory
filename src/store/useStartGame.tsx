import { create } from 'zustand'

interface State {
  theme: string
  numberOfPlayers: number
  gridSize: string
}

interface Actions {
  setRoundSettings: (currentRoundSettings: Map<string, string | number>) => void
}

const useStartGame = create<State & Actions>((set) => {
  return {
    theme: '',
    numberOfPlayers: 0,
    gridSize: '',

    setRoundSettings: (currentRoundSettings: Map<string, string | number>) => {
      set(() => ({
        theme: String(currentRoundSettings.get('Select Theme')),
        numberOfPlayers: Number(currentRoundSettings.get('Number of Players')),
        gridSize: String(currentRoundSettings.get('Grid Size')),
      }))
    },
  }
})

export default useStartGame

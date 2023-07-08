import { create } from 'zustand'
interface PlyerScores {
  P1: { pairs: number; moves: number; time: string }
  P2: { pairs: number; moves: number }
  P3: { pairs: number; moves: number }
  P4: { pairs: number; moves: number }
}

interface State {
  gameIsStarted: boolean
  plyerScores: PlyerScores
}

interface Actions {
  setGameIsStarted: () => void
}

const plyerInitialScore: PlyerScores = {
  P1: { pairs: 0, moves: 0, time: '00:00' },
  P2: { pairs: 0, moves: 0 },
  P3: { pairs: 0, moves: 0 },
  P4: { pairs: 0, moves: 0 },
}
const useRoundData = create<State & Actions>((set) => ({
  gameIsStarted: false,
  plyerScores: plyerInitialScore,

  setGameIsStarted: () => {
    set(() => ({
      gameIsStarted: true,
    }))
  },
}))

export default useRoundData

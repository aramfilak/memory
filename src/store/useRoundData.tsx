import { create } from 'zustand'

interface PlyerScores {
  P1: { pairs: number; moves: number }
  P2: { pairs: number; moves: number }
  P3: { pairs: number; moves: number }
  P4: { pairs: number; moves: number }
}
interface SoloPlyerScores {
  moves: number
  timeElapsed: string
}
interface State {
  gameIsStarted: boolean
  gameIsFinished: boolean
  plyerScores: PlyerScores
  soloPlyerScores: SoloPlyerScores
}

interface Actions {
  setGameIsStarted: (val: boolean) => void
  setGameIsFinished: (val: boolean) => void
  setPlyerScores: (plyerName: keyof PlyerScores, scores: { pairs: number; moves: number }) => void
  setSoloPlyerTimeElapsed: (timeElapsed: string) => void
  incrementSoloPlyerMoves: () => void
  resetRoundData: () => void
}

const plyerInitialScore: PlyerScores = {
  P1: { pairs: 0, moves: 0 },
  P2: { pairs: 0, moves: 0 },
  P3: { pairs: 0, moves: 0 },
  P4: { pairs: 0, moves: 0 },
}

const SoloPlyerInitialScores: SoloPlyerScores = {
  moves: 0,
  timeElapsed: '',
}
const useRoundData = create<State & Actions>((set) => ({
  gameIsStarted: false,
  gameIsFinished: false,
  plyerScores: plyerInitialScore,
  soloPlyerScores: SoloPlyerInitialScores,

  resetRoundData: () => {
    set(() => ({
      gameIsStarted: false,
      gameIsFinished: false,
      plyerScores: plyerInitialScore,
      soloPlyerScores: SoloPlyerInitialScores,
    }))
  },
  setGameIsStarted: (val: boolean) => {
    set(() => ({
      gameIsStarted: val,
    }))
  },
  setGameIsFinished: (val: boolean) => {
    set(() => ({
      gameIsFinished: val,
    }))
  },
  setPlyerScores: (plyerName: keyof PlyerScores, scores: { pairs: number; moves: number }) => {
    set((state) => ({
      plyerScores: { ...state.plyerScores, [plyerName]: scores },
    }))
  },

  setSoloPlyerTimeElapsed: (timeElapsed: string) => {
    set((state) => ({
      soloPlyerScores: { ...state.soloPlyerScores, timeElapsed },
    }))
  },
  incrementSoloPlyerMoves: () => {
    set((state) => ({
      soloPlyerScores: { ...state.soloPlyerScores, moves: state.soloPlyerScores.moves + 1 },
    }))
  },
}))

export default useRoundData

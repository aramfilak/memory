import { create } from 'zustand'
import useStartMenuOptions from './useStartMenuOptions'

type PlyerScores = { pairs: number; moves: number }

interface SoloPlyerScores {
  moves: number
  timeElapsed: string
}
interface State {
  gameIsStarted: boolean
  gameIsFinished: boolean
  plyersScores: PlyerScores[]
  soloPlyerScores: SoloPlyerScores
  currentPlyer: number
}

interface Actions {
  setGameIsStarted: (val: boolean) => void
  setGameIsFinished: (val: boolean) => void
  setSoloPlyerTimeElapsed: (timeElapsed: string) => void
  incrementSoloPlyerMoves: () => void
  resetRoundData: () => void
  updateCurrentPlyer: (numberOfPlayers: number) => void
  updatePlyerMoves: (plyerNo: number) => void
  updatePlyerPairsScore: (plyerNo: number) => void
}

const plyersInitialScore: PlyerScores[] = [
  { pairs: 0, moves: 0 },
  { pairs: 0, moves: 0 },
  { pairs: 0, moves: 0 },
  { pairs: 0, moves: 0 },
]

const SoloPlyerInitialScores: SoloPlyerScores = {
  moves: 0,
  timeElapsed: '',
}
const useRoundData = create<State & Actions>((set) => {
  return {
    gameIsStarted: false,
    gameIsFinished: false,
    plyersScores: plyersInitialScore,
    soloPlyerScores: SoloPlyerInitialScores,
    currentPlyer: 1,

    resetRoundData: () => {
      set(() => ({
        gameIsStarted: false,
        gameIsFinished: false,
        plyerScores: plyersInitialScore,
        soloPlyerScores: SoloPlyerInitialScores,
        plyersScores: plyersInitialScore,
        currentPlyer: 1,
      }))
    },
    updateCurrentPlyer: (numberOfPlayers: number) => {
      set((state) => ({
        currentPlyer: state.currentPlyer + 1 <= numberOfPlayers ? state.currentPlyer + 1 : 1,
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

    updatePlyerMoves: (plyerNo: number) => {
      set((state) => {
        const plyerIndex = plyerNo - 1
        return {
          plyersScores: [
            ...state.plyersScores.slice(0, plyerIndex),
            {
              ...state.plyersScores[plyerIndex],
              moves: state.plyersScores[plyerIndex].moves + 1,
            },
            ...state.plyersScores.slice(plyerIndex),
          ],
        }
      })
    },
    updatePlyerPairsScore: (plyerNo: number) => {
      set((state) => {
        const plyerIndex = plyerNo - 1
        return {
          plyersScores: [
            ...state.plyersScores.slice(0, plyerIndex),
            { ...state.plyersScores[plyerIndex], pairs: state.plyersScores[plyerIndex].pairs + 2 },
            ...state.plyersScores.slice(plyerIndex),
          ],
        }
      })
    },
  }
})

export default useRoundData

import { create } from 'zustand'

type PlyerScores = { playerNo: number; pairs: number; moves: number }

interface SoloPlayerScores {
  moves: number
  timeElapsed: string
}
interface State {
  gameIsStarted: boolean
  gameIsFinished: boolean
  multiPlyersScores: PlyerScores[]
  soloPlyerScores: SoloPlayerScores
  currentPlyer: number
  restart: boolean
  showResultWindow: boolean
}

interface RoundResults {
  winners: number[]
  multiPlyersScores: PlyerScores[]
}
interface Actions {
  setGameIsStarted: (val: boolean) => void
  setGameIsFinished: (val: boolean) => void
  setSoloPlyerTimeElapsed: (timeElapsed: string) => void
  incrementSoloPlyerMoves: () => void
  resetRoundData: () => void
  updateCurrentPlyer: (numberOfPlayers: number) => void
  updateMultiPlyerMoves: (plyerNo: number) => void
  updateMultiPlyerPairsScore: (plyerNo: number) => void
  restartGame: () => void
  setShowResultWindow: (val: boolean) => void
  getMultiPlayerRoundResults: () => RoundResults
}

const plyersInitialScore: PlyerScores[] = [
  { playerNo: 1, pairs: 0, moves: 0 },
  { playerNo: 2, pairs: 0, moves: 0 },
  { playerNo: 3, pairs: 0, moves: 0 },
  { playerNo: 4, pairs: 0, moves: 0 },
]

const soloPlayerInitialScores: SoloPlayerScores = {
  moves: 0,
  timeElapsed: '',
}

const useRoundData = create<State & Actions>((set) => ({
  gameIsStarted: false,
  gameIsFinished: false,
  multiPlyersScores: plyersInitialScore,
  soloPlyerScores: soloPlayerInitialScores,
  currentPlyer: 1,
  restart: false,
  showResultWindow: false,

  resetRoundData: () => {
    set(() => ({
      gameIsStarted: false,
      gameIsFinished: false,
      soloPlyerScores: soloPlayerInitialScores,
      multiPlyersScores: plyersInitialScore,
      currentPlyer: 1,
      showResultWindow: false,
    }))
  },
  restartGame: () => {
    set((state) => ({
      restart: !state.restart,
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

  updateMultiPlyerMoves: (playerNo: number) => {
    set((state) => {
      const playerIndex = playerNo - 1
      const updatedPlayer = {
        ...state.multiPlyersScores[playerIndex],
        moves: state.multiPlyersScores[playerIndex].moves + 1,
      }
      const updatedPlayersScores = [...state.multiPlyersScores]
      updatedPlayersScores[playerIndex] = updatedPlayer

      return {
        multiPlyersScores: updatedPlayersScores,
      }
    })
  },
  updateMultiPlyerPairsScore: (playerNo: number) => {
    set((state) => {
      const playerIndex = playerNo - 1
      const updatedPlayer = {
        ...state.multiPlyersScores[playerIndex],
        pairs: state.multiPlyersScores[playerIndex].pairs + 1,
      }
      const updatedPlayersScores = [...state.multiPlyersScores]
      updatedPlayersScores[playerIndex] = updatedPlayer

      return {
        multiPlyersScores: updatedPlayersScores,
      }
    })
  },
  setShowResultWindow: (val: boolean) => {
    set(() => ({
      showResultWindow: val,
    }))
  },
  getMultiPlayerRoundResults: () => {
    let multiPlyersScore: PlyerScores[] = []

    set((state) => {
      multiPlyersScore = state.multiPlyersScores
      return {}
    })
    const winners: number[] = []
    let maxScore = -1
    for (let i = 0; i < multiPlyersScore.length; i++) {
      maxScore = Math.max(maxScore, multiPlyersScore[i].pairs)
    }
    for (let i = 0; i < multiPlyersScore.length; i++) {
      if (multiPlyersScore[i].pairs === maxScore) {
        winners.push(multiPlyersScore[i].playerNo)
      }
    }
    return {
      winners: winners,
      multiPlyersScores: multiPlyersScore.sort((a, b) => b.pairs - a.pairs),
    }
  },
}))

export default useRoundData

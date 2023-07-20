import { create } from 'zustand';

type PlayerScores = { playerNo: number; pairs: number; moves: number };

interface SoloPlayerScores {
  moves: number;
  timeElapsed: string;
}

interface RoundResults {
  winners: number[];
  multiPlayersScores: PlayerScores[];
}

const PlayersInitialScore: PlayerScores[] = [
  { playerNo: 1, pairs: 0, moves: 0 },
  { playerNo: 2, pairs: 0, moves: 0 },
  { playerNo: 3, pairs: 0, moves: 0 },
  { playerNo: 4, pairs: 0, moves: 0 },
];

const soloPlayerInitialScores: SoloPlayerScores = {
  moves: 0,
  timeElapsed: '',
};
interface RoundData {
  gameIsStarted: boolean;
  gameIsFinished: boolean;
  multiPlayersScores: PlayerScores[];
  soloPlayerScores: SoloPlayerScores;
  currentPlayer: number;
  restart: boolean;
  showResultWindow: boolean;
  setGameIsStarted: (val: boolean) => void;
  setGameIsFinished: (val: boolean) => void;
  setSoloPlayerTimeElapsed: (timeElapsed: string) => void;
  incrementSoloPlayerMoves: () => void;
  resetRoundData: () => void;
  updateCurrentPlayer: (numberOfPlayers: number) => void;
  updateMultiPlayerMoves: (PlayerNo: number) => void;
  updateMultiPlayerPairsScore: (PlayerNo: number) => void;
  restartGame: () => void;
  setShowResultWindow: (val: boolean) => void;
  getMultiPlayerRoundResults: () => RoundResults;
}

const useRoundData = create<RoundData>((set) => ({
  gameIsStarted: false,
  gameIsFinished: false,
  multiPlayersScores: PlayersInitialScore,
  soloPlayerScores: soloPlayerInitialScores,
  currentPlayer: 1,
  restart: false,
  showResultWindow: false,

  resetRoundData: () => {
    set(() => ({
      gameIsStarted: false,
      gameIsFinished: false,
      soloPlayerScores: soloPlayerInitialScores,
      multiPlayersScores: PlayersInitialScore,
      currentPlayer: 1,
      showResultWindow: false,
    }));
  },
  restartGame: () => {
    set((state) => ({
      restart: !state.restart,
    }));
  },
  updateCurrentPlayer: (numberOfPlayers: number) => {
    set((state) => ({
      currentPlayer: state.currentPlayer + 1 <= numberOfPlayers ? state.currentPlayer + 1 : 1,
    }));
  },
  setGameIsStarted: (val: boolean) => {
    set(() => ({
      gameIsStarted: val,
    }));
  },
  setGameIsFinished: (val: boolean) => {
    set(() => ({
      gameIsFinished: val,
    }));
  },

  setSoloPlayerTimeElapsed: (timeElapsed: string) => {
    set((state) => ({
      soloPlayerScores: { ...state.soloPlayerScores, timeElapsed },
    }));
  },
  incrementSoloPlayerMoves: () => {
    set((state) => ({
      soloPlayerScores: {
        ...state.soloPlayerScores,
        moves: state.soloPlayerScores.moves + 1,
      },
    }));
  },

  updateMultiPlayerMoves: (playerNo: number) => {
    set((state) => {
      const playerIndex = playerNo - 1;
      const updatedPlayer = {
        ...state.multiPlayersScores[playerIndex],
        moves: state.multiPlayersScores[playerIndex].moves + 1,
      };
      const updatedPlayersScores = [...state.multiPlayersScores];
      updatedPlayersScores[playerIndex] = updatedPlayer;

      return {
        multiPlayersScores: updatedPlayersScores,
      };
    });
  },
  updateMultiPlayerPairsScore: (playerNo: number) => {
    set((state) => {
      const playerIndex = playerNo - 1;
      const updatedPlayer = {
        ...state.multiPlayersScores[playerIndex],
        pairs: state.multiPlayersScores[playerIndex].pairs + 1,
      };
      const updatedPlayersScores = [...state.multiPlayersScores];
      updatedPlayersScores[playerIndex] = updatedPlayer;

      return {
        multiPlayersScores: updatedPlayersScores,
      };
    });
  },
  setShowResultWindow: (val: boolean) => {
    set(() => ({
      showResultWindow: val,
    }));
  },
  getMultiPlayerRoundResults: () => {
    let multiPlayersScore: PlayerScores[] = [];

    set((state) => {
      multiPlayersScore = state.multiPlayersScores;
      return {};
    });
    const winners: number[] = [];
    let maxScore = -1;
    for (let i = 0; i < multiPlayersScore.length; i++) {
      maxScore = Math.max(maxScore, multiPlayersScore[i].pairs);
    }
    for (let i = 0; i < multiPlayersScore.length; i++) {
      if (multiPlayersScore[i].pairs === maxScore) {
        winners.push(multiPlayersScore[i].playerNo);
      }
    }
    return {
      winners: winners,
      multiPlayersScores: multiPlayersScore.sort((a, b) => b.pairs - a.pairs),
    };
  },
}));

export default useRoundData;

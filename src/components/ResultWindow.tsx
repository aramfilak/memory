import './ResultWindow.scss';
import React, { useMemo } from 'react';
import useRoundData from '../store/useRoundData';
import useStartMenuOptions from '../store/useStartMenuOptions';
import WindowModalWrapper from './WindowModalWrapper';

const soloMessage = {
  mainMessage: 'You did it!',
  subMessage: 'Game over! Here’s how you got on…',
};

const MultiMessage = {
  tieMessage: 'It’s a tie!',
  winMessage: 'Player * Wins!',
  subMessage: 'Game over! Here’s how you got on…',
};

function ResultWindow() {
  const { gameIsFinished, restartGame, soloPlayerScores, getMultiPlayerRoundResults } =
    useRoundData();
  const { setMenuVisibility, isSoloRound, numberOfPlayers } = useStartMenuOptions();

  const multiPlayerRenderedMessage = useMemo(() => {
    const message: React.JSX.Element[] = [];
    const { winners, multiPlayersScores } = getMultiPlayerRoundResults();
    message.push(
      <React.Fragment key={-1}>
        <h2 className="main-message">
          {winners.length > 1
            ? MultiMessage.tieMessage
            : MultiMessage.winMessage.replace('*', String(winners[0]))}
        </h2>
        <p className="sub-message">{MultiMessage.subMessage} </p>
      </React.Fragment>
    );

    for (let i = 0; i < numberOfPlayers; i++) {
      const playerScore = multiPlayersScores[i];
      const isWinner = winners.find((PlayerNo) => PlayerNo === playerScore.playerNo);
      message.push(
        <div key={i} className={`result-bar ${isWinner ? 'winner' : ''}`}>
          <span className="title">{`Player ${playerScore.playerNo} ${
            isWinner ? '(Winner!)' : ''
          }`}</span>
          <span className="value">{`${playerScore.pairs} Pairs`}</span>
        </div>
      );
    }

    return message;
  }, [gameIsFinished]);

  const renderedSoloPlayerMessage = (
    <>
      <h2 className="main-message">{soloMessage.mainMessage}</h2>
      <p className="sub-message">{soloMessage.subMessage}</p>

      <div className="result-bar">
        <span className="title">Time Elapsed</span>
        <span className="value">{soloPlayerScores.timeElapsed}</span>
      </div>

      <div className="result-bar">
        <span className="title">Moves Taken</span>
        <span className="value">{`${soloPlayerScores.moves} Moves`}</span>
      </div>
    </>
  );

  return (
    <WindowModalWrapper>
      <div className="content-wrapper">
        {isSoloRound ? renderedSoloPlayerMessage : multiPlayerRenderedMessage}
        <div className="message-buttons">
          <button className="btn primary sm" onClick={() => restartGame()}>
            Restart
          </button>
          <button className="btn secondary sm" onClick={() => setMenuVisibility(true)}>
            Setup New Game
          </button>
        </div>
      </div>
    </WindowModalWrapper>
  );
}
export default ResultWindow;

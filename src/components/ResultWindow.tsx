import './ResultWindow.scss'
import React, { useEffect, useState } from 'react'
import WindowModalWrapper from './WindowModalWrapper'
import useRoundData from '../store/useRoundData'
import useStartMenuOptions from '../store/useStartMenuOptions'

const soloMessage = {
  mainMessage: 'You did it!',
  subMessage: 'Game over! Here’s how you got on…',
}

const MultiMessage = {
  tieMessage: 'It’s a tie!',
  winMessage: 'Player * Wins!',
  subMessage: 'Game over! Here’s how you got on…',
}

const ResultWindow: React.FC = () => {
  const {
    gameIsFinished,
    restartGame,
    restart,
    soloPlyerScores,
    multiPlyersScores,
    getMultiPlayerRoundResults,
  } = useRoundData()
  const { visibleMenu, setMenuVisibility, isSoloRound, numberOfPlayers } = useStartMenuOptions()
  const [closeWindow, setCloseWindow] = useState<boolean>(true)

  useEffect(() => {
    if (gameIsFinished) {
      setCloseWindow(false)
    } else {
      setCloseWindow(true)
    }
  }, [gameIsFinished, restart, visibleMenu])

  const renderedSoloPlyerMessage = (
    <>
      <h2 className="main-message">{soloMessage.mainMessage}</h2>
      <p className="sub-message">{soloMessage.subMessage}</p>

      <div className="result-bar">
        <span className="title">Time Elapsed</span>
        <span className="value">{soloPlyerScores.timeElapsed}</span>
      </div>

      <div className="result-bar">
        <span className="title">Moves Taken</span>
        <span className="value">{`${soloPlyerScores.moves} Moves`}</span>
      </div>
    </>
  )

  const multiPlyerRenderedMessage = React.useMemo(() => {
    const message: React.JSX.Element[] = []
    const { winners, multiPlyersScores } = getMultiPlayerRoundResults()
    message.push(
      <>
        <h2 className="main-message">
          {winners.length > 1
            ? MultiMessage.tieMessage
            : MultiMessage.winMessage.replace('*', String(winners[0]))}
        </h2>
        <p className="sub-message">{MultiMessage.subMessage} </p>
      </>
    )

    for (let i = 0; i < numberOfPlayers; i++) {
      const playerScore = multiPlyersScores[i]
      const isWinner = winners.find((plyerNo) => plyerNo === playerScore.playerNo)
      message.push(
        <>
          <div className={`result-bar ${isWinner ? 'winner' : ''}`}>
            <span className="title">{`Player ${playerScore.playerNo} ${
              isWinner ? '(Winner!)' : ''
            }`}</span>
            <span className="value">{`${playerScore.pairs} Pairs`}</span>
          </div>
        </>
      )
    }

    return message
  }, [multiPlyersScores, numberOfPlayers])

  return (
    <WindowModalWrapper close={closeWindow}>
      <div className="content-wrapper">
        {isSoloRound ? renderedSoloPlyerMessage : multiPlyerRenderedMessage}
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
  )
}

export default ResultWindow

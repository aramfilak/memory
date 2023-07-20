import './GamePageFooter.scss';
import React from 'react';
import useIsMobile from '../../../hooks/useIsMobile';
import useStartMenuOptions from '../../../store/useStartMenuOptions';
import useRoundData from '../../../store/useRoundData';

function MultiRoundFooter() {
  const { numberOfPlayers } = useStartMenuOptions();
  const { currentPlayer, multiPlayersScores } = useRoundData();
  const { isMobile } = useIsMobile();

  function playersInfos() {
    const infos: Array<React.ReactNode> = [];
    for (let PlayerNo = 1; PlayerNo <= numberOfPlayers; PlayerNo++) {
      infos.push(
        <div className={`info ${PlayerNo === currentPlayer ? 'active' : ''}`} key={PlayerNo}>
          <span className="title">{`${isMobile ? 'P' : 'Player'} ${PlayerNo}`}</span>
          <span className="value">{multiPlayersScores[PlayerNo - 1].moves}</span>
          {!isMobile && PlayerNo === currentPlayer && (
            <span className="current-turn">CURRENT TURN</span>
          )}
        </div>
      );
    }
    return infos;
  }

  return <footer className="multi-round-footer">{playersInfos()}</footer>;
}

export default MultiRoundFooter;

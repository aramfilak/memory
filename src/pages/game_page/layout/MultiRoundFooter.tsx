import './GamePageFooter.scss';
import React from 'react';
import useIsMobile from '../../../hooks/useIsMobile';
import useStartMenuOptions from '../../../store/useStartMenuOptions';
import useRoundData from '../../../store/useRoundData';

function MultiRoundFooter() {
    const { numberOfPlayers } = useStartMenuOptions();
    const { currentPlyer, multiPlyersScores } = useRoundData();
    const { isMobile } = useIsMobile();

    function playersInfos() {
        const infos: Array<React.ReactNode> = [];
        for (let plyerNo = 1; plyerNo <= numberOfPlayers; plyerNo++) {
            infos.push(
                <div className={`info ${plyerNo === currentPlyer ? 'active' : ''}`} key={plyerNo}>
                    <span className="title">{`${isMobile ? 'P' : 'Player'} ${plyerNo}`}</span>
                    <span className="value">{multiPlyersScores[plyerNo - 1].moves}</span>
                    {!isMobile && plyerNo === currentPlyer && (
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

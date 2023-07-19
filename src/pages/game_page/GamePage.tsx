import SoloRoundFooter from './layout/SoloRoundFooter';
import MultiRoundFooter from './layout/MultiRoundFooter';
import GamePageBody from './layout/GamePageBody';
import useStartMenuOptions from '../../store/useStartMenuOptions';
import ResultWindow from '../../components/ResultWindow';

function GamePage() {
    const { isSoloRound } = useStartMenuOptions();

    return (
        <div className="game-page" style={{ height: '100vh', paddingBottom: '60px' }}>
            <ResultWindow />
            <div className="container">
                <GamePageBody />
                {isSoloRound ? <SoloRoundFooter /> : <MultiRoundFooter />}
            </div>
        </div>
    );
}

export default GamePage;

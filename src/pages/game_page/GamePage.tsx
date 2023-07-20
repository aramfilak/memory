import SoloRoundFooter from './layout/SoloRoundFooter';
import MultiRoundFooter from './layout/MultiRoundFooter';
import GamePageHeader from './layout/GamePageHeader';
import useStartMenuOptions from '../../store/useStartMenuOptions';
import ResultWindow from '../../components/ResultWindow';
import MemoryGrid from '../../components/MemoryGrid';
import useRoundData from '../../store/useRoundData';

function GamePage() {
  const { isSoloRound } = useStartMenuOptions();
  const { gameIsFinished } = useRoundData();

  return (
    <div className="game-page" style={{ height: '100vh', paddingBottom: '60px' }}>
      {gameIsFinished && <ResultWindow />}
      <div className="container">
        <GamePageHeader />
        <MemoryGrid />
        {isSoloRound ? <SoloRoundFooter /> : <MultiRoundFooter />}
      </div>
    </div>
  );
}

export default GamePage;

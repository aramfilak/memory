import './GamePageHeader.scss';
import { useState } from 'react';
import WindowModalWrapper from '../../../components/WindowModalWrapper.tsx';
import useStartMenuOptions from '../../../store/useStartMenuOptions.tsx';
import useRoundData from '../../../store/useRoundData.tsx';

function GamePageHeader() {
  const { setMenuVisibility } = useStartMenuOptions();
  const { restartGame } = useRoundData();
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <header className="game-page-header">
      <h1 className="logo">memory</h1>
      <nav className="mobile-nav">
        <button type="button" className="btn sm primary" onClick={() => setOpenModal(true)}>
          Menu
        </button>
        {openModal && (
          <WindowModalWrapper>
            <button
              type="button"
              className="btn sm primary"
              onClick={() => {
                restartGame();
                setOpenModal(!openModal);
              }}
            >
              Restart
            </button>
            <button
              type="button"
              className="btn sm secondary"
              onClick={() => {
                setMenuVisibility(true);
                setOpenModal(false);
              }}
            >
              New Game
            </button>
            <button type="button" className="btn sm secondary" onClick={() => setOpenModal(false)}>
              Resume Game
            </button>
          </WindowModalWrapper>
        )}
      </nav>
      <nav className="tab-desk-nav">
        <button type="button" className="btn sm primary" onClick={() => restartGame()}>
          Restart
        </button>
        <button type="button" className="btn  sm secondary" onClick={() => setMenuVisibility(true)}>
          New Game
        </button>
      </nav>
    </header>
  );
}

export default GamePageHeader;

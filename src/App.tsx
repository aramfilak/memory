import MenuWrapper from './components/MenuWrapper';
import GamePage from './pages/game_page/GamePage';
import StartMenu from './components/StartMenu';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <main className="memory-game">
      <Analytics />
      <GamePage />
      <MenuWrapper>
        <StartMenu />
      </MenuWrapper>
    </main>
  );
}

export default App;

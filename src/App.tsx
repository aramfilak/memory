import './App.scss';
import MenuWrapper from './components/MenuWrapper';
import GamePage from './pages/game_page/GamePage';
import StartMenu from './components/StartMenu';

function App() {
    return (
        <main className="memory-game">
            <GamePage />
            <MenuWrapper>
                <StartMenu />
            </MenuWrapper>
        </main>
    );
}

export default App;

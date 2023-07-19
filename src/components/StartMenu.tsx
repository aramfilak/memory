import './StartMenu.scss';
import MenuOption from './MenuOption';
import useStartMenuOptions from '../store/useStartMenuOptions';

function StartMenu() {
    const { setMenuVisibility, setGridTheme, setNumberOfPlyers, setGridSize } =
        useStartMenuOptions();

    return (
        <div className="game-menu">
            <div className="options">
                <MenuOption
                    optionName={'Select Theme'}
                    subOptionsName={['Numbers', 'Icons']}
                    subOptionsValues={['NUMBERS', 'ICONS']}
                    dispatch={setGridTheme}
                />
                <MenuOption
                    optionName={'Number of Players'}
                    subOptionsName={[1, 2, 3, 4]}
                    subOptionsValues={[1, 2, 3, 4]}
                    dispatch={setNumberOfPlyers}
                />
                <MenuOption
                    optionName={'Grid Size'}
                    subOptionsName={['4x4', '6x6']}
                    subOptionsValues={[16, 36]}
                    dispatch={setGridSize}
                />
            </div>

            <button
                className="btn xl"
                type="button"
                onClick={() => {
                    setMenuVisibility(false);
                }}
            >
                Start Game
            </button>
        </div>
    );
}

export default StartMenu;

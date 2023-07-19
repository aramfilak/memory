import { create } from 'zustand';

interface StartMenuOptions {
    gridTheme: string;
    numberOfPlayers: number;
    gridSize: number;
    visibleMenu: boolean;
    isSoloRound: boolean;
    setGridTheme: (val: string) => void;
    setNumberOfPlyers: (val: number) => void;
    setGridSize: (val: number) => void;
    setMenuVisibility: (val: boolean) => void;
}

const useStartMenuOptions = create<StartMenuOptions>((set) => ({
    visibleMenu: true,
    gridTheme: '',
    numberOfPlayers: -1,
    gridSize: -1,
    isSoloRound: false,
    resetGrid: false,

    setMenuVisibility: (val: boolean) => {
        set(() => ({
            visibleMenu: val,
        }));
    },
    setGridTheme: (val: string) => {
        set(() => ({
            gridTheme: val,
        }));
    },
    setNumberOfPlyers: (val: number) => {
        set(() => ({
            numberOfPlayers: val,
            isSoloRound: val === 1,
        }));
    },
    setGridSize: (val: number) => {
        set(() => ({
            gridSize: val,
        }));
    },
}));

export default useStartMenuOptions;

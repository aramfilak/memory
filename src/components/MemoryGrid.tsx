import './MemoryGrid.scss';
import React, { useEffect, useState } from 'react';
import { generateIconsGrid, generateNumbersGrid } from '../helpers/helpers';
import useStartMenuOptions from '../store/useStartMenuOptions';
import useRoundData from '../store/useRoundData';

const NUMBERS = 'NUMBERS';
const ICONS = 'ICONS';
const TIMEOUT = 900;

function MemoryGrid() {
  const {
    setGameIsStarted,
    setGameIsFinished,
    incrementSoloPlayerMoves,
    resetRoundData,
    updateCurrentPlayer,
    updateMultiPlayerMoves,
    updateMultiPlayerPairsScore,
    currentPlayer,
    restart,
  } = useRoundData();
  const { gridSize, gridTheme, numberOfPlayers, visibleMenu, isSoloRound } = useStartMenuOptions();
  const [gridCells, setGridCells] = useState<React.ReactNode[] | number[]>([]);
  const [clickedCells, setClickedCells] = useState<Set<number>>(new Set());
  const [clickedCellsValues, setClickedCellsValues] = useState<Array<number>>([]);
  const [completedCells, setCompletedCells] = useState<Set<number | string>>(new Set());

  useEffect(() => {
    resetGrid();

    if (gridTheme === NUMBERS) {
      setGridCells(generateNumbersGrid(gridSize));
    } else if (gridTheme === ICONS) {
      setGridCells(generateIconsGrid(gridSize));
    }
  }, [visibleMenu, restart]);

  useEffect(() => {
    let timerID: ReturnType<typeof setTimeout> | null = null;

    const cell1 = clickedCellsValues[0];
    const cell2 = clickedCellsValues[1];

    if (clickedCells.size === 2) {
      timerID = setTimeout(() => {
        if (cell1 === cell2) {
          setCompletedCells(new Set(completedCells).add(cell1));
          updateMultiPlayerPairsScore(currentPlayer);
        } else {
          updateCurrentPlayer(numberOfPlayers);
          updateMultiPlayerMoves(currentPlayer);
        }
        // Reset
        setClickedCells(new Set());
        setClickedCellsValues([]);
      }, TIMEOUT);

      if (isSoloRound) {
        incrementSoloPlayerMoves();
      }
    }

    if (completedCells.size === gridSize / 2) {
      setGameIsFinished(true);
    }

    return () => {
      if (timerID) clearTimeout(timerID);
    };
  }, [clickedCellsValues, clickedCells, completedCells]);

  function resetGrid() {
    setClickedCells(new Set());
    setClickedCellsValues([]);
    setCompletedCells(new Set());
    resetRoundData();
  }

  function handleCellClick(cellValue: number, cellIndex: number) {
    if (clickedCells.size < 2) {
      setClickedCells(new Set(clickedCells).add(cellIndex));
      setClickedCellsValues([...clickedCellsValues, cellValue]);
    }
    setGameIsStarted(true);
  }

  return (
    <div className={`memory-grid size__${gridSize}`}>
      {gridCells.map((cellValue, cellIndex) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const cellVal = gridTheme === NUMBERS ? cellValue : cellValue?.type?.name;
        return (
          <div
            key={cellIndex}
            onClick={() => handleCellClick(cellVal, cellIndex)}
            className={`grid-cell  size__${gridSize} ${
              completedCells.has(cellVal) ? 'correct' : ''
            } ${clickedCells.has(cellIndex) || completedCells?.has(cellVal) ? 'show' : ''}`}
          >
            {cellValue}
          </div>
        );
      })}
    </div>
  );
}

export default MemoryGrid;

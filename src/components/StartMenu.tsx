import './StartMenu.scss'
import React, { useState } from 'react'

// Dynamic options
const gameOptions = {
  'Select Theme': ['Number', 'Icons'],
  'Numbers of Players': [1, 2, 3, 4],
  'Grid Size': ['4x4', '6x6'],
}

const StartMenu: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<Map<string, string | number>>(() => {
    const defaultOptions = new Map()
    Object.entries(gameOptions).forEach(([key, value]) => {
      defaultOptions.set(key, value[0])
    })

    return defaultOptions
  })

  const renderedOptions = Object.entries(gameOptions).map(([key, value]) => (
    <div key={key}>
      <h3 className="option-name">{key}</h3>
      <ul className="sub-options">
        {value.map((item, index) => (
          <li key={index}>
            <button
              className={`btn md ${selectedOptions.get(key) === item ? 'active' : ''}`}
              type="button"
              onClick={() =>
                setSelectedOptions((prevSelectedOptions) => {
                  const newMap = new Map(prevSelectedOptions)
                  newMap.set(key, item)
                  return newMap
                })
              }
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  ))

  const handleStartGame = () => {
    console.log('')
  }

  return (
    <div className="game-menu">
      <div className="options">{renderedOptions}</div>
      <button className="btn xl" type="button" onClick={handleStartGame}>
        Start Game
      </button>
    </div>
  )
}

export default StartMenu

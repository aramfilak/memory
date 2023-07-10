import './MenuOption.scss'
import React, { useEffect, useState } from 'react'

interface Props {
  optionName: string
  subOptionName: Array<string | number>
  subOptionsValues: Array<string | number>
  dispatch: (val: any) => any
}
const MenuOption: React.FC<Props> = ({ optionName, subOptionName, subOptionsValues, dispatch }) => {
  const [activeOption, setActiveOption] = useState<number>()

  useEffect(() => {
    // initialize default value
    setActiveOption(0)
    dispatch(subOptionsValues[0])
  }, [])

  const handleOptionClick = (index: number) => {
    setActiveOption(index)
    const optionValue = subOptionsValues[index]
    dispatch(optionValue)
  }
  return (
    <div>
      <h3 className="option-name">{optionName}</h3>
      <ul className="sub-options">
        {subOptionName.map((item, index) => (
          <li key={index}>
            <button
              className={`btn md ${activeOption === index ? 'active' : ''}`}
              type="button"
              onClick={() => handleOptionClick(index)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuOption

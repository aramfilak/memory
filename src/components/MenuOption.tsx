import './MenuOption.scss';
import React, { useEffect, useState } from 'react';

interface Props {
    optionName: string;
    subOptionsName: Array<string | number>;
    subOptionsValues: Array<string | number>;
    dispatch: (val: any) => any;
}
function MenuOption({ optionName, subOptionsName, subOptionsValues, dispatch }: Props) {
    const [activeOption, setActiveOption] = useState<number>();

    useEffect(() => {
        // initialize default value
        setActiveOption(0);
        dispatch(subOptionsValues[0]);
    }, []);

    function handleOptionClick(index: number) {
        setActiveOption(index);
        const optionValue = subOptionsValues[index];
        dispatch(optionValue);
    }

    return (
        <div>
            <h3 className="option-name">{optionName}</h3>
            <ul className="sub-options">
                {subOptionsName.map((item, index) => (
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
    );
}

export default MenuOption;

import { useState } from "react";

const arr = [
    'All Symbols',
    'BTCUSD.PERP',
    'ETHUSD.PERP' ,
    'BCHUSD.PERP' ,
    'LTCUSD.PERP' ,
    'XRPUSD.PERP' ,
    'YRPUSD.PERP' ,
    'ZRPUSD.PERP' ,
    '100SHIBUSD.PERP'
]

function DropdownSearch({ arr, selectedVal, handleChange }) {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    function toggle(e) {
        setIsOpen(isOpen => !isOpen);
    }

    function getDisplayValue() {
        if (query) return query;
        if (selectedVal) return selectedVal;
        return "";
    }

    function selectOption(option) {
        setQuery(() => "");
        handleChange(option);
        toggle();
    }

    function filter(arr) {
        return arr.filter((option) => option.toLowerCase().indexOf(query.toLowerCase()) > -1);
    }

    return (
        <div className='container'>
            <div className='dropdown'>
                <div id='dropButton' onClick={toggle}>{getDisplayValue()}
                    <span className='arrow'></span>
                </div>
                <div id='dropContent' className={isOpen ? 'open' : ''}>
                    <div className='control'>
                        <div className='selectedValue'>
                            <input
                                type='text'
                                name='searchSymbol'
                                placeholder='Search Symbol'
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    handleChange(null);
                                }}
                            />
                        </div>
                    </div>
                    <div className='dropContents'>
                        {filter(arr).map((option) => {
                            return (
                                <div
                                    onClick={() => selectOption(option)}
                                    className='option'
                                    key={option}>
                                    {option}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Dropdown() {
    const [value, setValue] = useState('All Symbols');

    return (
        <div className='container'>
            <DropdownSearch
                arr={arr}
                selectedVal={value}
                handleChange={(val) => setValue(val)}
            />
        </div>
    );
}
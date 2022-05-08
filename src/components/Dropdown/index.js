import { useState } from "react";
import PropTypes from 'prop-types'
import "./Dropdown.css"

const searchArr = [
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

    function toggle() {
        setIsOpen(isOpenn => !isOpenn);
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

    function filter(filterArr) {
        return filterArr.filter((option) => option.toLowerCase().indexOf(query.toLowerCase()) > -1);
    }

    return (
      <div className='container'>
        <div className='dropdown'>
          <div id='dropButton' onClick={toggle} role='button' tabIndex={0} aria-label='dropdown'>{getDisplayValue()}
            <span className='arrow' />
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
                        key={option}
                        role='button' tabIndex={0} aria-label='dropdownContent'>
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

DropdownSearch.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.string),
  selectedVal: PropTypes.func,
  handleChange: PropTypes.func,
}

export default function Dropdown() {
    const [value, setValue] = useState('All Symbols');

    return (
      <div className='container'>
        <DropdownSearch
          arr={searchArr}
          selectedVal={value}
          handleChange={(val) => setValue(val)}
        />    
      </div>  
    );
}
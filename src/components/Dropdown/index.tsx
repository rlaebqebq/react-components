import styles from './Dropdown.module.scss'
import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import cx from 'classnames'

import { ArrowdownIcon } from '../../assets/svgs'

const searchArr = [
  'All Symbols',
  'BTCUSD.PERP',
  'ETHUSD.PERP',
  'BCHUSD.PERP',
  'LTCUSD.PERP',
  'XRPUSD.PERP',
  'YRPUSD.PERP',
  'ZRPUSD.PERP',
  '100SHIBUSD.PERP',
]

const Dropdown = () => {
  const dropdownRef = useRef(null)
  const [display, setDisplay] = useState('All Symbols')
  const [keyword, setKeyword] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => setIsOpen(false)
  useClickAway(dropdownRef, handleClose)

  const handleDisplayValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDisplay(e.currentTarget.value)
  }

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value)
  }

  const filter = (filterArr: string[]) => {
    return filterArr.filter((option) => option.toLowerCase().includes(keyword.toLowerCase()))
  }

  return (
    <div className={styles.dropdownWrapper} ref={dropdownRef}>
      <div className={styles.dropdownButton} onClick={toggle}>
        <input type='text' value={display} readOnly />
        <ArrowdownIcon className={styles.arrowdown} />
      </div>
      <div className={cx({ [styles.isOpen]: isOpen }, styles.dropdownContent)}>
        <input type='text' placeholder='Search Symbol' onChange={handleKeyword} />
        <ul>
          {filter(searchArr).map((option) => (
            <li key={`option-${option}`} className={styles.dropdownContents}>
              <button type='button' value={option} onClick={handleDisplayValue}>
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown

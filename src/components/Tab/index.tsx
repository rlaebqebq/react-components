import { useState } from 'react'
import styles from './tab.module.scss'

const Tab = () => {
  const [moveLength, setMoveLength] = useState(0)

  const tabArray = [
    { id: 1, name: '고구마' },
    { id: 2, name: '감자' },
    { id: 3, name: '카레라이스' },
  ]

  const handleTabDecoration = (e: React.MouseEvent<HTMLInputElement>) => {
    setMoveLength((Number(e.currentTarget.value) - 1) * (360 / tabArray.length))
  }
  return (
    <div className={styles.tabs}>
      {tabArray.map((tab) => (
        <button type='button' key={tab.id}  style={{ width: `calc(100% / ${tabArray.length})` }}>
          <input
            type='radio'
            name='tabName'
            id={`tab${tab.id}`}
            value={tab.id}
            onClick={handleTabDecoration}
            defaultChecked={`${tab.id}` === '1'}
          />
          <label htmlFor={`tab${tab.id}`}>{tab.name}</label>
        </button>
      ))}
      <div className={styles.tabDecoration} style={{ transform: `translateX(${moveLength}px)`, width: `calc(100% / ${tabArray.length})` }} />
    </div>
  )
}

export default Tab

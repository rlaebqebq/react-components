import styles from './Tab.module.scss'
import { useState } from 'react'

const Tab = () => {
  const [moveLength, setLength] = useState(0)

  const tabArray = [
    { id: 1, name: '고구마' },
    { id: 2, name: '감자' },
    { id: 3, name: '카레라이스' },
  ]

  const handleTabDecoration = (e: React.MouseEvent<HTMLInputElement>) => {
    setLength((Number(e.currentTarget.value) - 1) * (360 / tabArray.length))
  }
  return (
    <div className={styles.tabs}>
      {tabArray.map((tab) => (
        <button type='button' key={tab.id}>
          <input
            type='radio'
            id={`tab${tab.id}`}
            value={tab.id}
            onClick={handleTabDecoration}
            name='tabName'
            defaultChecked={`${tab.id}` === '1'}
          />
          <label htmlFor={`tab${tab.id}`}>{tab.name}</label>
        </button>
      ))}
      <div className={styles.tabDecoration} style={{ transform: `translateX(${moveLength}px)` }} />
    </div>
  )
}

export default Tab

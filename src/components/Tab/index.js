import { useState } from 'react'
import styles from './Tab.module.scss'

export default function Tab() {
  const [moveLength, setLength] = useState(0)

  const arr = [
    { name: '고구마', id: 1 },
    { name: '감자', id: 2 },
    { name: '카레라이스', id: 3 },
  ]
  const tabList =
    arr.map(tab =>
      <div key={tab.id} className={styles.tab}>
        <input type='radio' name='tabName' value={tab.id} id={`tab${tab.id}`} defaultChecked={`${tab.id}` === '1'} />
        <label htmlFor={`tab${tab.id}`}>{tab.name}</label>
      </div>
    )

  function handleTabDeco(e) {
    setLength((e - 1) * (360 / arr.length));
  }
  return (
    <div className='container'>
      <div className={styles.tabs} onClick={(e) => handleTabDeco(e.currentTarget.value) } aria-hidden='true'>
        {tabList}
        <span className={styles.tabCheck} style={{ transform: `translateX(${moveLength}px)` }} />
      </div>
    </div>
  )
}
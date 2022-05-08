import { useState } from 'react'
import styles from './Slider.module.scss'

export default function Slider() {
  const [volume, setVolume] = useState(1)

  const sliderIndx = Math.floor(volume / 25)
  const ulli = document.getElementsByClassName('sliderLi')

  for (let i = 0; i < sliderIndx; i += 1) {
    ulli[i].classList.add('active')
  }

  for (let j = 0; j < ulli.length - sliderIndx; j += 1) {
    ulli[ulli.length - j - 1].classList.remove('active')
  }

  const arr = [1, 25, 50, 75, 100]

  return (
    <div className='container'>
      <div className={styles.sliderNum}>
        <span>{volume}</span>
        <span>%</span>
      </div>
      <input
        type='range'
        min={1}
        max={100}
        step={1}
        value={volume}
        style={{
          background: `linear-gradient(to right, #66c4cd 0%, #66c4cd ${volume}%, #aaaaaa ${volume}%, #aaaaaa 100%)`
        }}
        onChange={(event) => {
          setVolume(event.target.valueAsNumber)
        }}
      />

      <ul className={styles.sliderUl}>
        <li className='active' />
        <li className='sliderLi' />
        <li className='sliderLi' />
        <li className='sliderLi' />
        <li className='sliderLi' />
      </ul>

      <div className={styles.buttonSetVolume}>
        {arr.map((numButton) => (
          <button type='button' onClick={() => setVolume(numButton)} key={`numButton${numButton}`}>
            {numButton}%
          </button>
        ))}
      </div>
    </div>
  )
}

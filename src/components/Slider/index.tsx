import styles from './Slider.module.scss'
import { useState } from 'react'

const Slider = () => {
  const sliderScales = [1, 25, 50, 75, 100]
  const [volume, setVolume] = useState(1)

  const sliderIndx = Math.floor(volume / 25)
  const ulli = document.getElementsByClassName('sliderLi')

  for (let i = 0; i < sliderIndx; i += 1) {
    ulli[i].classList.add('active')
  }

  for (let j = 0; j < ulli.length - sliderIndx; j += 1) {
    ulli[ulli.length - j - 1].classList.remove('active')
  }

  const handleSlider = (e: React.MouseEvent<HTMLButtonElement>) => {
    setVolume(Number(e.currentTarget.value))
  }

  return (
    <>
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
          background: `linear-gradient(to right, #66c4cd 0%, #66c4cd ${volume}%, #aaaaaa ${volume}%, #aaaaaa 100%)`,
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
        {sliderScales.map((sliderScale) => (
          <button type='button' key={`sliderScale${sliderScale}`} value={sliderScale} onClick={handleSlider}>
            {sliderScale}%
          </button>
        ))}
      </div>
    </>
  )
}

export default Slider

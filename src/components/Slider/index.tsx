import { useState } from 'react'
import { cx } from 'styles'
import styles from './slider.module.scss'

interface IProps {
  standard: number
  value: number
}

const Indicator = ({ standard, value }: IProps) => {
  const checkValue = standard <= value
  return <li className={cx({ [styles.active]: checkValue }, styles.indicator)} />
}

const Slider = () => {
  const sliderScales = [1, 25, 50, 75, 100]
  const [volume, setVolume] = useState(1)

  const handleSlider = (e: React.MouseEvent<HTMLButtonElement>) => {
    setVolume(Number(e.currentTarget.value))
  }

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(e.currentTarget.valueAsNumber)
  }

  return (
    <>
      <p className={styles.sliderNum}>
        <span>{volume}</span>
        <span>%</span>
      </p>
      <div className={styles.sliderWrapper}>
      <input
          type='range'
          min={1}
          max={100}
          step={1}
          value={volume}
          className={styles.sliderHandle}
          onChange={handleRange}
        />
        <input
          type='range'
          min={1}
          max={100}
          step={1}
          value={volume}
          className={styles.sliderBar}
          style={{
            background: `linear-gradient(to right, #66c4cd 0%, #66c4cd ${volume}%, #aaaaaa ${volume}%, #aaaaaa 100%)`,
          }}
        />
        <ul className={styles.indicators}>
          {sliderScales.map((sliderScale) => (
            <Indicator key={`indicator-${sliderScale}`} standard={sliderScale} value={volume} />
          ))}
        </ul>
      </div>
      <div className={styles.buttonSetVolume}>
        {sliderScales.map((sliderScale) => (
          <button type='button' key={`sliderScale-${sliderScale}`} value={sliderScale} onClick={handleSlider}>
            {sliderScale}%
          </button>
        ))}
      </div>
    </>
  )
}

export default Slider

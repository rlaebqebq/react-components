import styles from './WantedPreOnboarding.module.scss'
import Toggle from '../../components/Toggle'
import Tab from '../../components/Tab'
import Slider from '../../components/Slider'
import Input from '../../components/Input'
import Dropdown from '../../components/Dropdown'

const WantedPreOnboarding = () => {
  return (
    <>
      <div className={styles.componentWrapper}>
        <Toggle />
      </div>
      <div className={styles.componentWrapper}>
        <Tab />
      </div>
      <div className={styles.componentWrapper}>
        <Slider />
      </div>
      <div className={styles.componentWrapper}>
        <Input />
      </div>
      <div className={styles.componentWrapper}>
        <Dropdown />
      </div>
    </>
  )
}

export default WantedPreOnboarding

import Toggle from '../../components/Toggle'
import Tab from '../../components/Tab'
import Slider from '../../components/Slider'
import Input from '../../components/Input'
import Dropdown from '../../components/Dropdown'

import styles from './WantedPreOnboarding.module.scss'

{
  /* import Dropdown from '../../components/Dropdown' */
}

function WantedPreOnboarding() {
  return (
    <div className={styles.centering}>
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown />
    </div>
  )
}

export default WantedPreOnboarding

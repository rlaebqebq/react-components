import Toggle from 'components/Toggle'
import Tab from 'components/Tab'
import Slider from 'components/Slider'
import Input from 'components/Input'
import Dropdown from 'components/Dropdown'

import styles from './routes.module.scss'

const App = () => {
  return (
    <div className={styles.appWrapper}>
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
    </div>
  )
}

export default App

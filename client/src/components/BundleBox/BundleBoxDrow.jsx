import React from 'react'
import styles from './BundleBox.module.css';

export const BundleBoxDrow = (props) => {
    const {renderImage , mouseOutHandler , getBackClass , mouseOverHandler , propsBundle} = props
    const {setBundle, header, describe} = propsBundle
  return (
    <div
    onMouseOver={mouseOverHandler}
    onMouseOut={mouseOutHandler}
    onClick={() => setBundle(header)}
    id={header}
    className={styles.bundleContainer + getBackClass()}
  >
    <div>
      {renderImage()}
    </div>
    <div className={styles.infoContainer}>
      <span className={styles.bundleName}>{header}</span>
      <hr />
      <span className={styles.infoBundle}>{describe}</span>
    </div>
  </div>
  )
}
export default BundleBoxDrow;
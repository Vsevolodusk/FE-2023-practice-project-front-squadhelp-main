import React from "react";
import styles from './style.module.css'

const BundleInput = (props) => {
  const { getValue, BUNDLE_CONSTANTS } = props;
  const createOption = () => {
    return BUNDLE_CONSTANTS.map((elem, index) => (
      <option className={styles.bundleOption} key={index} value={JSON.stringify(elem.BundleDiscription)}>
        {elem.BundleName}
      </option>
    ));
  };
  const handleSelectionChange = (e) => {
    getValue(e.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <span className={styles.pricingFor}>Pricing For</span>
      <select className={styles.bundleInput} onChange={handleSelectionChange}>
        {createOption()}
      </select>
    </div>
  );
};

export default BundleInput;

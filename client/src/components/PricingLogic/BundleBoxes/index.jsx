import styles from "./style.module.css";

const BundleBoxes = (props) => {
  const { bundleInputValue } = props;
  const getBoxColor = (name) => {
    switch (name) {
      case "Bronze":
        return {
           color : styles.bronze , 
           background : styles.bronze_background
        }
      case "Gold":
        return {
          color : styles.gold , 
          background : styles.gold_background
       }
      case "Platinum":
        return {
          color : styles.platinum , 
          background : styles.platinum_background
       }
      case "Managed":
        return {
          color : styles.managed , 
          background : styles.managed_background
       }
      default:
        return styles.defaultColor;
    }
  };
  const bundleRendering = () => {
    return (
      <div className={styles.wrapper}>
        {bundleInputValue.map((elem, index) => (
          <div key={index} className={`${styles.innerWrapper} `}>
            <div className={`${getBoxColor(elem.Name).color} ${styles.pricingContainer}`}>
              <h2 className={styles.boxName}>{elem.Name}</h2>
              <p className={`${styles.descriptionText} ${styles.noneDisplay}`}>{elem.Text}</p>
              <p className={`${styles.price}`}>{elem.Price}</p>
              <p className={`${styles.save}`}>{elem.Save}</p>
            </div>
            {elem.BundleInformation.map((elem) => (
              <div className={styles.advContainer}>
                <p className={styles.advMainText}>{elem.MainText}</p>
                {elem.Subtext.map((elem) => {
                  return (
                    <ul>
                      <li className={styles.advSubText} ><i class={`fa-solid fa-check ${styles.check}`}></i>{elem}</li>
                    </ul>
                  );
                })}
              </div>
            ))}
             <a href='#' className={`${styles.bundleButton} ${getBoxColor(elem.Name).background}`}><i class="fa-solid fa-check"></i>Start</a>
          </div>
        ))}
      </div>
    );
  };
  return <div>{bundleRendering()}</div>;
};
export default BundleBoxes;

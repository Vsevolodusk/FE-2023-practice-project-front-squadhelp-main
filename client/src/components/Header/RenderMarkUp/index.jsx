import React from "react";
import styles from '../Header.module.sass'
import { Link, withRouter } from 'react-router-dom';
import HeaderLists from '../HeaderLists';

const RenderMarkap = (props) => {
    const {CONSTANTS , renderLoginButtons , data} = props
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.fixedHeader}>
          <span className={styles.info}>
            Squadhelp recognized as one of the Most Innovative Companies by Inc
            Magazine.
          </span>
          <a href="http://www.google.com">Read Announcement</a>
        </div>
        <div className={styles.loginSignnUpHeaders}>
          <div className={styles.numberContainer}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt="phone" />
            <a href="tel:877353585">(877) 355-3585</a>
          </div>
          <div className={styles.userButtonsContainer}>
            {renderLoginButtons}
          </div>
        </div>
        <div className={styles.navContainer}>
          <Link to="/">
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`}
              className={styles.logo}
              alt="blue_logo"
            />
          </Link>
          <div className={styles.leftNav}>
            <div className={styles.nav}>
              <HeaderLists constatnData={CONSTANTS}></HeaderLists>
            </div>
            {data && data.role !== CONSTANTS.CREATOR && (
              <div
                className={styles.startContestBtn}
                onClick={props.startContests}
              >
                START CONTEST
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default RenderMarkap
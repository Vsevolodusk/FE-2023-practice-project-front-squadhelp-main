import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './BackButton.module.css';

const BackButton = (props) => {
  function clickHandler() {
    props.history.goBack();
  }

  return (
    <button onClick={clickHandler} className={styles.buttonContainer}>
       Back
    </button>
  );
};

export default withRouter(BackButton);

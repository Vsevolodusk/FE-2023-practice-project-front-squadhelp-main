import React from 'react';
import styles from './BundleBox.module.css';
import CONSTANTS from '../../constants';
import BundleBoxDrow from './BundleBoxDrow';

const BundleBox = (props) => {
  const defaultPathToImages = `${CONSTANTS.STATIC_IMAGES_PATH}contestLabels/`;

  const renderImage = () => {
    const array = [];
    for (let i = 0; i < props.path.length; i++) {
      array.push(<img
        src={defaultPathToImages + props.path[i]}
        key={i}
        className={styles.imgContainer}
        alt={props.path[i].replace(/.png/g, 'Contest')}
      />);
    }
    return array;
  };

  const mouseOverHandler = () => {
    const element = document.getElementById(props.header);
    for (let i = 0; i < element.children[0].children.length; i++) {
      element.children[0].children[i].src = `${defaultPathToImages}blue_${props.path[i]}`;
    }
  };

  const mouseOutHandler = () => {
    const element = document.getElementById(props.header);
    for (let i = 0; i < element.children[0].children.length; i++) {
      element.children[0].children[i].src = defaultPathToImages + props.path[i];
    }
  };

  const getBackClass = () => (props.path.length === 1 ? ' ' : ` ${styles.combinedBundle}`);

  const { setBundle, header, describe } = props;
  return (
    <BundleBoxDrow renderImage={renderImage} mouseOutHandler={mouseOutHandler} getBackClass={getBackClass} mouseOverHandler={mouseOverHandler} propsBundle ={{setBundle, header, describe}} />
  );
};

export default BundleBox;

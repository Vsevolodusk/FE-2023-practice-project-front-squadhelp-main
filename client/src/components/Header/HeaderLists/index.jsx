import React from "react";
import styles from './style.module.css'

const HeaderLists = (props) => {
  const {constatnData} = props
  const headerElements = () => {
   return constatnData.HeaderItems.map((elem , index) => {
      return (
        <li className={styles.listItem} key={index}>
          <span className={styles.listItemElem}>{elem.title}</span>
          <img
            src={`${constatnData.STATIC_IMAGES_PATH}menu-down.png`}
            alt="menu"
          />
          <ul className={styles.listSubMenu}>
            {elem.linkItems.map((elem , index) => <li className={styles.listSubMenuItem} key={index}><a className={styles.subMenuItemLink} href={elem.link} >{elem.item}</a></li>)}        
          </ul>
        </li>
      );
    });
  };
  return (
    <>
      <ul className={styles.menuList}>
        {headerElements()}
      </ul>
    </>
  );
};

export default HeaderLists;

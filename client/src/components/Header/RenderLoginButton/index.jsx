import React from 'react'
import styles from '../Header.module.sass'
import CONSTANTS from '../../../constants'
import { Link} from 'react-router-dom';

export const RenderButtons = (props) => {
    const renderResult = () =>{
        if (props.data) {
            return (
              <>
                <div className={styles.userInfo}>
                  <img
                    src={props.data.avatar === 'anon.png' ? CONSTANTS.ANONYM_IMAGE_PATH : `${CONSTANTS.publicURL}${props.data.avatar}`}
                    alt="user"
                  />
                  <span>{`Hi, ${props.data.displayName}`}</span>
                  <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
                  <ul>
                    <li>
                      <Link
                        to="/dashboard"
                        style={{ textDecoration: 'none' }}
                      >
                        <span>View Dashboard</span>
                      </Link>
                    </li>
                    <li><Link to="/account" style={{ textDecoration: 'none' }}><span>My Account</span></Link></li>
                    <li>
                      <Link
                        to="http:/www.google.com"
                        style={{ textDecoration: 'none' }}
                      >
                        <span>Messages</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="http:/www.google.com" style={{ textDecoration: 'none' }}><span>Affiliate Dashboard</span></Link>
                    </li>
                    <li><Link to='/' onClick={props.logOut} style={{ textDecoration: 'none' }}><span>Logout</span></Link></li>
                  </ul>
                </div>
                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`} className={styles.emailIcon} alt="email" />
              </>
            );
          }
          return (
            <>
              <Link to="/login" style={{ textDecoration: 'none' }}><span className={styles.btn}>LOGIN</span></Link>
              <Link to="/registration" style={{ textDecoration: 'none' }}>
                <span
                  className={styles.btn}
                >
                  SIGN UP
                </span>
              </Link>
            </>
          );
    }
  return (
   <>
   {renderResult()}
   </>
  )
}
export default RenderButtons
import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import PricingContainer from '../../components/PricingLogic'
import styles from './style.module.css'

export const Pricing = (props) => {
  return (
    <div className={styles.wrapper}>
     <Header />
     <PricingContainer/>
     <Footer />
    </div>
  )
}
export default Pricing
import React from "react";
import Products from "../Products";
import styles from './styles.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <Products />
    </div>
  );
};

export default Home;

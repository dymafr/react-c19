import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <NavLink to="/">
          <strong>JWT</strong>
        </NavLink>
      </div>
      <ul className={styles.headerList}>
          <NavLink to="signup" className="mr-15">
            Inscription
          </NavLink>
      </ul>
    </header>
  );
}

export default Header;

import React, { Component } from "react";
import { Link } from "react-router-dom";

import World from "../../assets/world.svg";
import Music from "../../assets/notes.svg";
import Psychology from "../../assets/health.svg";

import styles from "./Themes.module.css";

export default class Themes extends Component {
  render() {
    return (
      <div className={styles.theme}>
        <Link className={styles.block} to="/theme/geography">
          <h3 className={styles.title}>География</h3>
          <img className={styles.image} src={World} alt="World" />
        </Link>
        <Link className={styles.block} to="/theme/music">
          <h3 className={styles.title}>Музыка</h3>
          <img className={styles.image} src={Music} alt="Music" />
        </Link>
        <Link className={styles.block} to="/theme/psychology">
          <h3 className={styles.title}>Психология</h3>
          <img className={styles.image} src={Psychology} alt="Psychology" />
        </Link>
      </div>
    );
  }
}

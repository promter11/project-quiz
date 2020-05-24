import React, { Component } from "react";

import styles from "./PageNotFound.module.css";

export default class PageNotFound extends Component {
  render() {
    return (
      <div className={styles.block}>
        <h2 className={styles.title}>404</h2>
        <p className={styles.text}>Page not found :(</p>
      </div>
    );
  }
}

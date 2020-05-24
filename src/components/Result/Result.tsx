import React, { Component } from "react";
import { Link } from "react-router-dom";

import Cross from "../../assets/cross-icon.svg";
import Tick from "../../assets/tick-icon.svg";
import Checklist from "../../assets/checklist.svg";
import styles from "./Result.module.css";

import { IQuiz } from "../../interfaces/IQuiz";
import { IResultProps } from "../../interfaces/IResultProps";

export default class Result extends Component<IQuiz, object> {
  render() {
    const { results, repeatQuiz } = this.props;

    return (
      <div className={styles.result}>
        <div className={styles.left}>
          <h3 className={styles.title}>Тест успешно завершен!</h3>
          <img className={styles.image} src={Checklist} alt="Complete" />
        </div>
        <div className={styles.right}>
          <h3 className={styles.resultTitle}>Результаты</h3>
          <ul className={styles.list}>
            {results!.map(({ id, question, answer, status }: IResultProps) => {
              return (
                <li key={id} className={styles.item}>
                  <span className={styles.question}>{question}</span>
                  <span className={styles.answer}>{answer}</span>
                  <img
                    className={styles.status}
                    src={status ? Tick : Cross}
                    alt="Статус"
                  />
                </li>
              );
            })}
          </ul>
          <div className={styles.wrapper}>
            <button className={styles.redirectButton} type="button">
              <Link className={styles.link} to="/">
                Перейти к списку тестов
              </Link>
            </button>
            <button
              className={styles.repeatButton}
              type="button"
              onClick={repeatQuiz}
            >
              Попробовать снова
            </button>
          </div>
        </div>
      </div>
    );
  }
}

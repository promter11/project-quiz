import React, { Component } from "react";

import styles from "./Question.module.css";

import { IQuiz } from "../../interfaces/IQuiz";
import { IQuestionProps } from "../../interfaces/IQuestionProps";

export default class Question extends Component<IQuiz, object> {
  render() {
    const { questions, activeQuestion } = this.props;
    const imgSRC = `https://picsum.photos/${Math.floor(Math.random() * 768)}`;

    return (
      <div className={styles.question}>
        <h2 className={styles.title}>
          Вопрос {activeQuestion! + 1}/{questions!.length}
        </h2>
        <img className={styles.image} src={imgSRC} alt="Вопрос" />
        <h3 className={styles.questionTitle}>
          {questions![activeQuestion!].title}
        </h3>
        <div className={styles.pagination}>
          {questions!.map(({ id }: IQuestionProps) => {
            const classes = [styles.paginationItem];

            if (activeQuestion === id) {
              classes.push(styles.active);
            }

            return <span key={id} className={classes.join(" ")} />;
          })}
        </div>
      </div>
    );
  }
}

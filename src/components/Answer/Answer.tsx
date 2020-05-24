import React, { Component } from "react";

import AnswerList from "../AnswerList";

import styles from "./Answer.module.css";

import { IQuiz } from "../../interfaces/IQuiz";

export default class Answer extends Component<IQuiz, object> {
  render() {
    const { questions, activeQuestion, selectAnswer } = this.props;

    return (
      <div className={styles.answer}>
        <h2 className={styles.title}>Выберите правильный ответ</h2>
        <AnswerList
          questions={questions}
          activeQuestion={activeQuestion}
          selectAnswer={selectAnswer}
        />
      </div>
    );
  }
}

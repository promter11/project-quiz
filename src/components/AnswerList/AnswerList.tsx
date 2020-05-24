import React, { Component } from "react";

import styles from "./AnswerList.module.css";

import { IQuiz } from "../../interfaces/IQuiz";
import { IAnswerProps } from "../../interfaces/IAnswerProps";

export default class AnswerList extends Component<IQuiz, object> {
  render() {
    const { questions, activeQuestion, selectAnswer } = this.props;
    const answers: Array<IAnswerProps> = questions![activeQuestion!].answers;

    return (
      <ul className={styles.list}>
        {answers.map(({ id, title, isTrue }: IAnswerProps) => {
          const result = {
            id: questions![activeQuestion!].id,
            question: questions![activeQuestion!].title,
            answer: title,
            status: isTrue,
          };

          return (
            <li
              key={id}
              className={styles.item}
              onClick={() => (selectAnswer ? selectAnswer(result) : null)}
            >
              {title}
            </li>
          );
        })}
      </ul>
    );
  }
}

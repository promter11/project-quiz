import React, { Component, Fragment } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import Question from "../Question";
import Answer from "../Answer";
import Result from "../Result";

import styles from "./Quiz.module.css";

import { IQuiz } from "../../interfaces/IQuiz";
import { IMatchProps } from "../../interfaces/IMatchProps";
import { IResultProps } from "../../interfaces/IResultProps";

class Quiz extends Component<RouteComponentProps<IMatchProps>, IQuiz> {
  state: IQuiz = {
    questions: [],
    results: [],
    activeQuestion: 0,
  };

  selectAnswer = (element: IResultProps) => {
    this.setState(({ activeQuestion, results }) => ({
      activeQuestion: activeQuestion! + 1,
      results: [...results, element],
    }));
  };

  repeatQuiz = () => {
    this.setState({
      activeQuestion: 0,
      results: [],
    });
  };

  componentDidMount() {
    const { match } = this.props;

    fetch("../quiz.json")
      .then((response) => response.json())
      .then((data) => {
        Object.entries(data).forEach((element: [string, any]) => {
          const [key, value] = element;

          if (key === match.params.title) {
            this.setState({
              questions: value,
            });
          }
        });
      });
  }

  componentWillUnmount() {
    this.setState({
      questions: [],
      results: [],
    });
  }

  render() {
    const { questions, results, activeQuestion } = this.state;

    return (
      <div className={styles.quiz}>
        {activeQuestion !== questions!.length ? (
          <Fragment>
            <Question questions={questions} activeQuestion={activeQuestion} />
            <Answer
              questions={questions}
              activeQuestion={activeQuestion}
              selectAnswer={this.selectAnswer}
            />
          </Fragment>
        ) : (
          <Result results={results} repeatQuiz={this.repeatQuiz} />
        )}
      </div>
    );
  }
}

export default withRouter(Quiz);

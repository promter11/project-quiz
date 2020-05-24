import { IAnswerProps } from "./IAnswerProps";

export interface IQuestionProps {
  id: number;
  title: string;
  answers: Array<IAnswerProps>;
}

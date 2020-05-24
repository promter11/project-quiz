import { IQuestionProps } from "./IQuestionProps";
import { IResultProps } from "./IResultProps";

export interface IQuiz {
  questions?: Array<IQuestionProps>;
  results?: Array<IResultProps>;
  activeQuestion?: number;
  selectAnswer?: (results: IResultProps) => void;
  repeatQuiz?: () => void;
}

import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";
import { YesNoQuestion } from "./YesNoQuestion";

export interface Question {
    question: MultipleChoiceQuestion | YesNoQuestion | undefined   
}

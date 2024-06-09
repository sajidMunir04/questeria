import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";
import { SimpleQuestion } from "./SimpleQuestion";
import { YesNoQuestion } from "./YesNoQuestion";

export interface Question {
    question: MultipleChoiceQuestion | YesNoQuestion | SimpleQuestion|  undefined   
}

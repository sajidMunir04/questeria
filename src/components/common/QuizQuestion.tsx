import { MultipleChoiceQuestion } from "../utils/MultipleChoiceQuestion";
import { YesNoQuestion } from "../utils/YesNoQuestion";

interface Props{
    multipleChoiceQuestion : MultipleChoiceQuestion | undefined,
    yesOrNoQuestion: YesNoQuestion | undefined
}


function QuizQuestion(props: Props) {
    return (<div>
        {props.multipleChoiceQuestion !== undefined && <div>
            <p>{props.multipleChoiceQuestion.question}</p>
            {props.multipleChoiceQuestion.answers.map((item) => <p>{item}</p>)}
        </div>}
        {props.yesOrNoQuestion !== undefined && <div>
            <p>{props.yesOrNoQuestion.question}</p>
            <p>True</p>
            <p>False</p>
            </div>}
    </div>);
}

export default QuizQuestion;
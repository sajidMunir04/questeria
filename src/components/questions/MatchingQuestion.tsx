import QuestionHeader from "../common/QuestionHeader";
import { QuestionProps } from "./QuestionProps";

function MatchingQuestion(props : QuestionProps) {
    return (<div>
        <QuestionHeader questionIndex={props.index} onDeleteButtonClick={props.deleteQuestion}/>
        
    </div>);
}

export default MatchingQuestion;
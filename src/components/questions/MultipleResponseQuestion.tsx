import { useState } from "react";
import QuestionHeader from "../common/QuestionHeader";
import QuestionInputField from "../common/QuestionInputField";
import { QuestionProps } from "./QuestionProps";


function MultipleResponseQuestion(props : QuestionProps) {

    const [questionText,setQuestionText] = useState('')

    return (<div>
        <QuestionHeader questionIndex={props.index} onDeleteButtonClick={props.deleteQuestion}/>
        <div>
            <QuestionInputField defaultValue={questionText} canEdit={false}/>
        </div>
    </div>);
}

export default MultipleResponseQuestion;
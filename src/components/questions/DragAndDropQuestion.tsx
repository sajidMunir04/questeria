import { useState } from "react";
import QuestionHeader from "../common/QuestionHeader";
import { QuestionProps } from "./QuestionProps";
import OutlinedButton from "../common/OutlinedButton";


function DragAndDropQuestion(props : QuestionProps) {
    return (<div>
        <QuestionHeader questionIndex={props.index} onDeleteButtonClick={props.deleteQuestion}/>
    </div>);
}

export default DragAndDropQuestion;
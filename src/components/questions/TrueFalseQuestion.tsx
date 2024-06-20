import { ChangeEvent, useState } from "react";
import QuestionInputField from "../common/QuestionInputField";
import YesNoAnswerInputField from "../common/YesNoAnswerField";
import { QuestionProps } from "./QuestionProps";
import { YesNoQuestionData } from "../utils/YesNoQuestionData";
import QuestionHeader from "../common/QuestionHeader";


function TrueFalseQuestion(props : QuestionProps) {

    const [questionText,setQuestionText] = useState('');
    const [answerIsNo,setAnswerToNo] = useState(false);
    const [answerIsYes,setAnswerToYes] = useState(false);

    const handleDataChange = () => {
        const questionData : YesNoQuestionData = {
            questionText: questionText,
            answerIsYes: answerIsYes,
            answerIsNo: answerIsNo
        }

        props.handleDataChange(JSON.stringify(questionData),props.index);
    }

    return (<div className='border-b-2 mb-8'>
            <QuestionHeader questionIndex={props.index} onDeleteButtonClick={props.deleteQuestion}/>
            <div className='p-8 bg-white'>
            <QuestionInputField defaultValue={questionText} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setQuestionText(e.target.value);
            handleDataChange();
        } } canEdit={false}/>
            <div className='mb-5'>
            <YesNoAnswerInputField value={'Yes'} isCorrect={answerIsYes} 
            onClick={() => {
                setAnswerToNo(false);
                setAnswerToYes(true);
                handleDataChange();
            }} />
            <YesNoAnswerInputField value={'No'} isCorrect={answerIsNo} 
            onClick={() => {
                setAnswerToNo(true);
                setAnswerToYes(false);
                handleDataChange();
            }} />
            </div>
            </div>
    </div>);
}

export default TrueFalseQuestion;
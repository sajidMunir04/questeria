import { ChangeEvent, useState } from "react";
import AnswerInputField from "../common/AnswerInputField";
import QuestionInputField from "../common/QuestionInputField";
import { QuestionProps } from "./QuestionProps";
import { SimpleQuestionData } from "../utils/SimpleQuestionData";
import QuestionHeader from "../common/QuestionHeader";

function SimpleQuestion(props : QuestionProps) {

    const [questionText,setQuestionText] = useState('');
    const [answerText,setAnswerText] = useState('');

    const handleDataChange = () => {
        const questionData : SimpleQuestionData = {
            questionText: questionText,
            answerText: answerText
        }

        props.handleDataChange(JSON.stringify(questionData),props.index);
    }

    return (<div className='border-b-2 mb-8'>
        <QuestionHeader questionIndex={props.index} onDeleteButtonClick={props.deleteQuestion} 
        onMoveDownButtonClick={props.moveDown} onMoveUpButtonClick={props.moveUp}/>
            <div className='p-8 bg-white'>
            <QuestionInputField defaultValue={questionText} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setQuestionText(e.target.value);
            handleDataChange();
        } } canEdit={false}/>
            <AnswerInputField defaultValue={answerText} onChange={(e : ChangeEvent<HTMLInputElement>) => {
                setAnswerText(e.target.value);
                handleDataChange();
            }}/>
            </div>
    </div>);
}

export default SimpleQuestion;
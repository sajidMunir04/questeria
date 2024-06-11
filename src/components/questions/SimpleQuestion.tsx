import { ChangeEvent, useState } from "react";
import AnswerInputField from "../common/AnswerInputField";
import QuestionInputField from "../common/QuestionInputField";
import { QuestionProps } from "./QuestionProps";
import { SimpleQuestionData } from "../utils/SimpleQuestionData";

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

    return (<div className='border-b-2'>
            <p>{props.index + 1}-</p>
            <QuestionInputField defaultValue={questionText} onChange={(e : ChangeEvent<HTMLInputElement>) => {
                setQuestionText(e.target.value);
                handleDataChange();
            }}/>
            <AnswerInputField defaultValue={answerText} onChange={(e : ChangeEvent<HTMLInputElement>) => {
                setAnswerText(e.target.value);
                handleDataChange();
            }}/>
    </div>);
}

export default SimpleQuestion;
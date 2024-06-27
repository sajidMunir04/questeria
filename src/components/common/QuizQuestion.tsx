import { multipleChoiceQuestionAlias, simpleQuestionAlias } from "../lib/constants";
import QuestionInputField from "./QuestionInputField";
import MCQAnswerInputField from "./MCQAnswerInputField";
import YesNoAnswerField from "./YesNoAnswerField";
import { useState } from "react";
import AnswerInputField from "./AnswerInputField";

interface Props{
    inputQuestion : string
}


function QuizQuestion(props: Props) {
    const questionInfo = props.inputQuestion.split('#');
    const questionData : any = JSON.parse(questionInfo[0]).question;
    console.log(questionData);

    return (<div className='flex flex-row-reverse w-full justify-between border-b-4 border-b-gray-800'>
    </div>);
}


export default QuizQuestion;

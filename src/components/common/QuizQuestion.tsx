import { multipleChoiceQuestionAlias, simpleQuestionAlias, yesNoQuestionAlias } from "../lib/constants";
import QuestionInputField from "./QuestionInputField";
import MCQAnswerInputField from "./MCQAnswerInputField";
import YesNoAnswerField from "./YesNoAnswerField";
import { useState } from "react";
import AnswerInputField from "./AnswerInputField";

interface Props{
    inputQuestion : string
}


function QuizQuestion(props: Props) {

    const [canEdit,setEditAccess] = useState(false);

    const questionInfo = props.inputQuestion.split('#');
    const questionData : any = JSON.parse(questionInfo[0]).question;
    console.log(questionData);

    return (<div className='flex flex-row-reverse w-full justify-between border-b-4 border-b-gray-800'>
        <div>
            <button onClick={() => {
                setEditAccess(true);
            }}>Edit</button>
            <button>Delete</button>
        </div>
        {questionInfo[1] === simpleQuestionAlias && <div className='w-3/4 flex flex-col'>
            <QuestionInputField defaultValue={questionData.questionText} canEdit={false} />
            <AnswerInputField defaultValue={questionData.answerText}/>
        </div>}
        {questionInfo[1] === multipleChoiceQuestionAlias && <div className='w-3/4'>
            <QuestionInputField defaultValue={questionData.questionText} canEdit={false}/>
            {questionData.answers.map((item : string,index : number) => 
            <MCQAnswerInputField onDelete={() => {
                
            }} canEdit={canEdit} defaultValue={item} isCorrectAnswer={questionData.correctAnswerIndex === index}/>)}
        </div>}
        {questionInfo[1] === yesNoQuestionAlias && <div>
            <QuestionInputField defaultValue={questionData.questionText} canEdit={false}/>
            <YesNoAnswerField value={'Yes'} isCorrect={questionData.answerIsYes} onClick={() => {}}/>
            <YesNoAnswerField value={'No'} isCorrect={questionData.answerIsNo} onClick={() => {}}/>
        </div>}
    </div>);
}


export default QuizQuestion;

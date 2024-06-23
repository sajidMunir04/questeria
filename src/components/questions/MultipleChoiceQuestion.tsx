import { ChangeEvent, useState } from "react";
import MCQAnswerInputField from "../common/MCQAnswerInputField";
import QuestionInputField from "../common/QuestionInputField";
import SimpleButton from "../common/SimpleButton";
import { QuestionProps } from "./QuestionProps";
import { MultipleChoiceQuestionData } from "../utils/MultipleChoiceQuestionData";
import { multipleChoiceQuestionAlias, questionDataSeparator } from "../lib/constants";
import QuestionHeader from "../common/QuestionHeader";
import OutlinedButton from "../common/OutlinedButton";

function MultipleChoiceQuestion(props : QuestionProps) {

    const [question,setQuestion] = useState<string>('');
    const [answers,setAnswers] = useState<string[]>(['']);
    const [correctAnswerIndex,setCorrectAnswerIndex] = useState(-1);
    const [canEdit,setEditStatus] = useState(true);

    const handleQuestionInput = (e: ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.target.value);
    }

    const handleSave = () => {
        setEditStatus(false);
    }

    const handleAddOption = () => {
        const answerOption : string = ' ';
        const newAnswers  = [...answers,answerOption];
        setAnswers(newAnswers);
    }

    const handleDataChange = () => {
        const questionData : MultipleChoiceQuestionData = {
            questionText: question,
            answers: answers,
            correctAnswerIndex: correctAnswerIndex
        }

        props.handleDataChange(JSON.stringify(questionData) + questionDataSeparator + multipleChoiceQuestionAlias,props.index);
    }

    const handleOptionDelete = (field : number) => {
        const filteredAnswers = answers.filter((item,index) => index !== field);
        setAnswers(filteredAnswers);
    }

    return (<div className='flex flex-col mb-8 border-b-2 bg-white rounded-2xl'>
        <QuestionHeader questionIndex={props.index} onDeleteButtonClick={props.deleteQuestion} 
        onMoveDownButtonClick={props.moveDown} onMoveUpButtonClick={props.moveUp}/>
        <div className='flex flex-col mb-8 border-b-2 p-8'>
        <QuestionInputField canEdit={canEdit} defaultValue={question} onChange={handleQuestionInput}/>
        <div className='m-auto w-full flex-col flex justify-start items-start'>
                {answers.map((item,index) => <MCQAnswerInputField onClick={() => setCorrectAnswerIndex(index)} key={index} defaultValue={item} isCorrectAnswer={correctAnswerIndex === index} canEdit={canEdit} onDelete={() => handleOptionDelete(index)}/>)}
                <div className='mb-5 flex w-full'>
                    {canEdit && 
                    <div className='w-1/6 ml-4'>
                    <OutlinedButton buttonText={"Add Option"} onClick={handleAddOption}/>
                    </div>}
                    {!canEdit && 
                    <div className='w-1/6 ml-4'>
                    <SimpleButton buttonText={"Edit"} onClick={() => setEditStatus(true)}/>
                    </div>}
                    {canEdit && 
                    <div className='w-1/6 ml-4'>
                    <SimpleButton buttonText={"Save"} onClick={() => setEditStatus(false)}/>
                    </div>}
                </div>    
        </div>
        </div>
    </div>);
}

export default MultipleChoiceQuestion;  
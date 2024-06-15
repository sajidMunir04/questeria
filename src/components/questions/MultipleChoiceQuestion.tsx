import { ChangeEvent, useState } from "react";
import MCQAnswerInputField from "../common/MCQAnswerInputField";
import QuestionInputField from "../common/QuestionInputField";
import SimpleButton from "../common/SimpleButton";
import { QuestionProps } from "./QuestionProps";
import { MultipleChoiceQuestionData } from "../utils/MultipleChoiceQuestionData";
import { multipleChoiceQuestionAlias, questionDataSeparator } from "../lib/constants";

function MultipleChoiceQuestion(props : QuestionProps) {

    const [question,setQuestion] = useState<string>('');
    const [answers,setAnswers] = useState<string[]>(['']);
    const [correctAnswerIndex,setCorrectAnswerIndex] = useState(-1);
    const [canEdit,setEditStatus] = useState(true);

    const handleQuestionInput = (e: ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.target.value);
        handleDataChange();
    }

    const handleSave = () => {
        setEditStatus(false);
    }

    const handleAddOption = () => {
        const answerOption : string = ' ';
        const newAnswers  = [...answers,answerOption];
        setAnswers(newAnswers);
        handleDataChange();
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

    return (<div className='flex flex-col mb-8 border-b-2'>
        <p className=''>{props.index + 1}-</p>
        <QuestionInputField canEdit={canEdit} defaultValue={question} onChange={handleQuestionInput}/>
        <div className='m-auto w-full flex-col flex items-center'>
                {answers.map((item,index) => <MCQAnswerInputField key={index} defaultValue={item} isCorrectAnswer={correctAnswerIndex === index} canEdit={canEdit} onDelete={() => handleOptionDelete(index)}/>)}
                <div className='w-1/3 mb-5'>
                    {canEdit && <SimpleButton buttonText={"Add Option"} onClick={handleAddOption}/>}
                    {!canEdit && <SimpleButton buttonText={"Edit"} onClick={() => setEditStatus(true)}/>}
                    <SimpleButton buttonText={"Save"} onClick={() => setEditStatus(false)}/>
                </div>    
        </div>
    </div>);
}

export default MultipleChoiceQuestion;  
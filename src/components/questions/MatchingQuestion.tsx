import { ChangeEvent, useState } from "react";
import QuestionHeader from "../common/QuestionHeader";
import QuestionInputField from "../common/QuestionInputField";
import { QuestionProps } from "./QuestionProps";
import AnswerInputField from "../common/AnswerInputField";
import OutlinedButton from "../common/OutlinedButton";
import { MatchingQuestionData } from "../utils/MatchingQuestionData";
import { matchingQuestionAlias, questionDataSeparator } from "../lib/constants";
import SimpleButton from "../common/SimpleButton";

function MatchingQuestion(props : QuestionProps) {

    const [questionText,setQuestionText] = useState(' ');
    const [firstOptions,setFirstOptions] = useState<string[]>(['']);
    const [secondOptions,setSecondOptions] = useState<string[]>(['']);
    const [canEdit,setEditStatus] = useState(true);

    const handleDataChange = () => {
        const questionData : MatchingQuestionData = {
            questionText: questionText,
            firstAnswers: firstOptions,
            secondAnswers: secondOptions
        }

        props.handleDataChange(JSON.stringify(questionData) + questionDataSeparator + matchingQuestionAlias,props.index);
    }

    return (<div className='mb-8'>
        <QuestionHeader questionIndex={props.index} onDeleteButtonClick={props.deleteQuestion} 
        onMoveDownButtonClick={props.moveDown} onMoveUpButtonClick={props.moveUp}/>
        <div className='p-8 bg-white'>
            <QuestionInputField defaultValue={questionText} canEdit={false} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setQuestionText(e.target.value);
                    }}/>
            <div className='flex justify-between'>
                <div className='flex flex-col w-2/5'>
                    {firstOptions.map((item) => <AnswerInputField defaultValue={item}/>)}
                </div>
                <div>
                    {firstOptions.map((item) => <p className='p-0'>=</p>)}
                </div>
                <div className='flex flex-col w-2/5'>
                    {secondOptions.map((item) => <AnswerInputField defaultValue={item}/>)}
                </div>
            </div>
            <div className='mb-5 flex w-full'>
                    {canEdit && 
                    <div className='w-1/6 ml-4'>
                    <OutlinedButton buttonText={"Add Option"} onClick={() => {
                    const fOptions = [...firstOptions,''];
                    const sOptions = [...secondOptions,''];
                    setFirstOptions(fOptions);
                    setSecondOptions(sOptions);
                    }}/>
                    </div>}
                    {!canEdit && 
                    <div className='w-1/6 ml-4'>
                    <SimpleButton buttonText={"Edit"} onClick={() => setEditStatus(true)}/>
                    </div>}
                    {canEdit && 
                    <div className='w-1/6 ml-4'>
                    <SimpleButton buttonText={"Save"} onClick={() => {setEditStatus(false);handleDataChange()}}/>
                    </div>}
            </div>  
        </div>
    </div>);
}

export default MatchingQuestion;

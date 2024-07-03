import { ChangeEvent, useState } from "react";
import QuestionInputField from "../common/QuestionInputField";
import { QuestionProps } from "./QuestionProps";
import { SimpleQuestionData } from "../../utils/SimpleQuestionData";
import QuestionHeader from "../common/QuestionHeader";
import SimpleButton from "../common/SimpleButton";
import { questionDataSeparator, simpleQuestionAlias } from "../../lib/constants";

function SimpleQuestion(props : QuestionProps) {

    const [questionText,setQuestionText] = useState('');
    const [canEdit,setEditStatus] = useState(true);

    const handleDataChange = () => {
        const questionData : SimpleQuestionData = {
            questionText: questionText
        }

        props.handleDataChange(JSON.stringify(questionData) + questionDataSeparator + simpleQuestionAlias,props.index);
    }

    return (<div className='border-b-2 mb-8'>
        <QuestionHeader questionIndex={props.index} onDeleteButtonClick={props.deleteQuestion} 
        onMoveDownButtonClick={props.moveDown} onMoveUpButtonClick={props.moveUp}/>
            <div className='p-8 bg-white'>
            <QuestionInputField defaultValue={questionText} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setQuestionText(e.target.value);
            handleDataChange();
        } } canEdit={false}/>
            <div className='w-full h-10 border-2 rounded-md mb-6'>

            </div>
            <div className='mb-5 flex w-full'>
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

export default SimpleQuestion;
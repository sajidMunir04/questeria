import { ChangeEvent, useState } from "react";
import QuestionInputField from "../common/QuestionInputField";
import YesNoAnswerInputField from "../common/YesNoAnswerField";
import { QuestionProps } from "./QuestionProps";
import { TrueFalseQuestionData } from "../utils/TrueFalseQuestionData";
import QuestionHeader from "../common/QuestionHeader";
import SimpleButton from "../common/SimpleButton";


function TrueFalseQuestion(props : QuestionProps) {

    const [questionText,setQuestionText] = useState('');
    const [canEdit,setEditStatus] = useState(true);

    const handleDataChange = () => {
        const questionData : TrueFalseQuestionData = {
            questionText: questionText
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
            <div className='mb-5'>
            <YesNoAnswerInputField value={'True'} />
            <YesNoAnswerInputField value={'False'} />
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

export default TrueFalseQuestion;
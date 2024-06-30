import { ChangeEvent, useState } from "react";
import QuestionHeader from "../common/QuestionHeader";
import { QuestionProps } from "./QuestionProps";
import QuestionInputField from "../common/QuestionInputField";
import AnswerInputField from "../common/AnswerInputField";
import OutlinedButton from "../common/OutlinedButton";
import SimpleButton from "../common/SimpleButton";
import { CorrectOrderQuestionData } from "../../utils/CorrectOrderQuestionData";
import { correctOrderQuestionAlias, questionDataSeparator } from "../../lib/constants";


function CorrectOrderQuestion(props : QuestionProps) {

    const [questionText,setQuestionText] = useState('');
    const [options,setOptions] = useState<string[]>([]);
    const [canEdit,setEditStatus] = useState(true);

    const handleDataChange = () => {
        const questionData : CorrectOrderQuestionData = {
            questionText: questionText,
            answers: options
        }

        props.handleDataChange(JSON.stringify(questionData) + questionDataSeparator + correctOrderQuestionAlias,props.index);
    }

    return (<div className='mb-8'>
        <QuestionHeader questionIndex={0} onDeleteButtonClick={props.deleteQuestion} onMoveUpButtonClick={props.moveUp} 
        onMoveDownButtonClick={props.moveDown}/>
        <div className='bg-white p-8'>
            <QuestionInputField defaultValue={questionText} canEdit={false} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setQuestionText(e.target.value);
                    }}/>
            <div className='w-1/3'>
                {options.map((item,index) => <AnswerInputField defaultValue={item} onChange={(e : ChangeEvent<HTMLInputElement>) => {
                    let newOptions = options;
                    newOptions[index] = e.target.value;
                    setOptions(newOptions);
                }}/>)}
            </div>
            <div className='mb-5 flex w-full'>
                    {canEdit && 
                    <div className='w-1/6 ml-4'>
                    <OutlinedButton buttonText={"Add Option"} onClick={() => {
                    const newOptions = [...options,''];
                    setOptions(newOptions);
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

export default CorrectOrderQuestion;
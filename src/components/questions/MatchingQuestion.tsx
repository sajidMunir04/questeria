import { useState } from "react";
import QuestionHeader from "../common/QuestionHeader";
import QuestionInputField from "../common/QuestionInputField";
import { QuestionProps } from "./QuestionProps";
import AnswerInputField from "../common/AnswerInputField";
import OutlinedButton from "../common/OutlinedButton";

function MatchingQuestion(props : QuestionProps) {

    const [questionText,setQuestionText] = useState(' ');
    const [firstOptions,setFirstOptions] = useState<string[]>(['']);
    const [secondOptions,setSecondOptions] = useState<string[]>(['']);

    return (<div className='mb-8'>
        <QuestionHeader questionIndex={props.index} onDeleteButtonClick={props.deleteQuestion} 
        onMoveDownButtonClick={props.moveDown} onMoveUpButtonClick={props.moveUp}/>
        <div className='p-8 bg-white'>
            <QuestionInputField defaultValue={questionText} canEdit={false}/>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    {firstOptions.map((item) => <AnswerInputField defaultValue={item}/>)}
                </div>
                <div className='flex flex-col'>
                    {secondOptions.map((item) => <AnswerInputField defaultValue={item}/>)}
                </div>
            </div>
            <div>
                <OutlinedButton buttonText={"Add Pair"} onClick={() => {
                    const fOptions = [...firstOptions,''];
                    const sOptions = [...secondOptions,''];
                    setFirstOptions(fOptions);
                    setSecondOptions(sOptions);
                }}/>
            </div>
        </div>
    </div>);
}

export default MatchingQuestion;

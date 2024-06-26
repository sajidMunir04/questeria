import { useState } from "react";
import QuestionHeader from "../common/QuestionHeader";
import { QuestionProps } from "./QuestionProps";
import QuestionInputField from "../common/QuestionInputField";
import AnswerInputField from "../common/AnswerInputField";
import OutlinedButton from "../common/OutlinedButton";


function CorrectOrderQuestion(props : QuestionProps) {

    const [questionText,setQuestionText] = useState('');
    const [options,setOptions] = useState<string[]>([]);

    return (<div className='mb-8'>
        <QuestionHeader questionIndex={0} onDeleteButtonClick={props.deleteQuestion} onMoveUpButtonClick={props.moveUp} 
        onMoveDownButtonClick={props.moveDown}/>
        <div className='bg-white p-8'>
            <QuestionInputField defaultValue={questionText} canEdit={false}/>
            <div className='w-1/3'>
                {options.map((item) => <AnswerInputField defaultValue={item}/>)}
            </div>
            <div>
                <OutlinedButton buttonText={"Add Option"} onClick={() => {
                    const newOptions = [...options,''];
                    setOptions(newOptions);
                }}/>
            </div>
        </div>
    </div>);
}

export default CorrectOrderQuestion;
import { useState } from "react";
import QuestionHeader from "../common/QuestionHeader";
import { QuestionProps } from "./QuestionProps";
import OutlinedButton from "../common/OutlinedButton";
import QuestionInputField from "../common/QuestionInputField";
import AnswerInputField from "../common/AnswerInputField";

export const blankLine : string = '____________________';


function FillBlanksQuestion(props : QuestionProps) {

    const [textSections,setTextSections] = useState<string[]>([' ',blankLine]);
    const [answerOptions,setAnswerOptions] = useState<string[]>([]);

    return (<div>
        <QuestionHeader questionIndex={props.index} onDeleteButtonClick={props.deleteQuestion} 
        onMoveDownButtonClick={props.moveDown} onMoveUpButtonClick={props.moveUp}/>
        <div className='bg-white p-8'>
            <div className='flex flex-wrap'>
            {textSections.map(function(item) {
                if (item !== blankLine) {
                    return <div className='w-max'><QuestionInputField defaultValue={item} canEdit={false}/></div>
                }
                else {
                    return <div className='relative w-auto'><p className='absolute top-4'>{item}</p><p className='-z-1'>{item}</p></div>
                }
            })}
            {textSections[textSections.length - 1] !== blankLine && <div>
                <OutlinedButton buttonText={"Add Blank"} onClick={() => {
                    const newSections = [...textSections,blankLine];
                    setTextSections(newSections);
                }}/>
              </div>}
              {textSections[textSections.length - 1] === blankLine && <div>
                <OutlinedButton buttonText={"Add Text"} onClick={() => {
                    const newSections = [...textSections,' '];
                    setTextSections(newSections);
                }}/>
              </div>}
            </div>
            <div>
                {answerOptions.map((item) => <AnswerInputField defaultValue={item}/>)}
            </div>
        </div>
    </div>);
}

export default FillBlanksQuestion;
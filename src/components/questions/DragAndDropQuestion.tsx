import { useState } from "react";
import QuestionHeader from "../common/QuestionHeader";
import { QuestionProps } from "./QuestionProps";
import OutlinedButton from "../common/OutlinedButton";
import AnswerInputField from "../common/AnswerInputField";
import SimpleButton from "../common/SimpleButton";
import QuestionInputField from "../common/QuestionInputField";

export const blankLine : string = '____________________';

function DragAndDropQuestion(props : QuestionProps) {

    const [textSections,setTextSections] = useState<string[]>([' ',blankLine]);
    const [answerOptions,setAnswerOptions] = useState<string[]>([]);

    return (<div className='mb-8'>     
        <QuestionHeader questionIndex={props.index} onDeleteButtonClick={props.deleteQuestion} 
        onMoveDownButtonClick={props.moveDown} onMoveUpButtonClick={props.moveUp}/>
                <div className='bg-white p-8'>
            <div className='flex flex-wrap'>
            {textSections.map(function(item) {
                if (item !== blankLine) {
                    return <div className='h-full'><QuestionInputField defaultValue={item} canEdit={false}/></div>
                }
                else {
                    return <div className='relative w-auto h-10 flex flex-col justify-end'><p className=''>{item}</p></div>
                }
            })}
            {
                <div>
                    <SimpleButton buttonText={"Remove Last Section"} onClick={() => {
                        const answersData = answerOptions;
                        answersData.pop();
                        setAnswerOptions([...answersData]);
                    }}/>
                    </div>
            }
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

export default DragAndDropQuestion;
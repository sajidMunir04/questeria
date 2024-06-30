import { ChangeEvent, useState } from "react";
import QuestionHeader from "../common/QuestionHeader";
import { QuestionProps } from "./QuestionProps";
import OutlinedButton from "../common/OutlinedButton";
import AnswerInputField from "../common/AnswerInputField";
import SimpleButton from "../common/SimpleButton";
import QuestionInputField from "../common/QuestionInputField";
import { DragAndDropQuestionData } from "../../utils/DragAndDropQuestionData";
import { dragAndDropQuestionAlias, questionDataSeparator } from "../../lib/constants";

export const blankLine : string = '____________________';

function DragAndDropQuestion(props : QuestionProps) {

    const [textSections,setTextSections] = useState<string[]>([' ',blankLine]);
    const [answerOptions,setAnswerOptions] = useState<string[]>([]);
    const [canEdit,setEditStatus] = useState(true);

    const handleDataChange = () => {
        const questionData : DragAndDropQuestionData = {
            questionSections: textSections,
            answers: answerOptions
        }

        props.handleDataChange(JSON.stringify(questionData) + questionDataSeparator + dragAndDropQuestionAlias,props.index);
    }

    return (<div className='mb-8'>     
        <QuestionHeader questionIndex={props.index} onDeleteButtonClick={props.deleteQuestion} 
        onMoveDownButtonClick={props.moveDown} onMoveUpButtonClick={props.moveUp}/>
                <div className='bg-white p-8'>
            <div className='flex flex-wrap'>
            {textSections.map(function(item,index) {
                if (item !== blankLine) {
                    return <div className='h-full'><QuestionInputField defaultValue={item} canEdit={false} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const sections = textSections;
                        sections[index] = e.target.value;
                        setTextSections(sections);
                    }}/></div>
                }
                else {
                    return <div className='relative w-auto h-10 flex flex-col justify-end'><p className=''>{item}</p></div>
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
                {answerOptions.map((item) => <div className='w-40'><AnswerInputField defaultValue={item}/></div>)}
            </div>
            <div className='mb-5 flex w-full'>
                    {canEdit && 
                    <div className='w-1/6 ml-4'>
                    <OutlinedButton buttonText={"Add Option"} onClick={() => {
                    const newAnswerOptions = [...answerOptions,''];
                    setAnswerOptions(newAnswerOptions);
                    }} />
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

export default DragAndDropQuestion;
import { ChangeEvent, useState } from "react";
import QuestionHeader from "../common/QuestionHeader";
import { QuestionProps } from "./QuestionProps";
import OutlinedButton from "../common/OutlinedButton";
import QuestionInputField from "../common/QuestionInputField";
import AnswerInputField from "../common/AnswerInputField";
import SimpleButton from "../common/SimpleButton";
import { FillBlanksQuestionData } from "../utils/FillBlanksQuestionData";
import { fillBlanksQuestionAlias, questionDataSeparator } from "../lib/constants";

export const blankLine : string = '____________________';


function FillBlanksQuestion(props : QuestionProps) {

    const [textSections,setTextSections] = useState<string[]>([' ',blankLine]);
    const [answerOptions,setAnswerOptions] = useState<string[]>([]);
    const [canEdit,setEditStatus] = useState(true);

    const handleDataChange = () => {
        const questionData : FillBlanksQuestionData = {
            questionSections: textSections,
            answerOptions: answerOptions
        }

        props.handleDataChange(JSON.stringify(questionData) + questionDataSeparator + fillBlanksQuestionAlias,props.index);
    }

    return (<div className='mb-8'>
        <QuestionHeader questionIndex={props.index} onDeleteButtonClick={props.deleteQuestion} 
        onMoveDownButtonClick={props.moveDown} onMoveUpButtonClick={props.moveUp}/>
        <div className='bg-white p-8'>
            <div className='flex flex-wrap'>
            {textSections.map(function(item,index) {
                if (item !== blankLine) {
                    return <div className='h-full'><QuestionInputField onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const sections = textSections;
                        sections[index] = e.target.value;
                        setTextSections(sections);
                    }} defaultValue={item} canEdit={false}/></div>
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
                {answerOptions.map((item) => <AnswerInputField defaultValue={item}/>)}
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

export default FillBlanksQuestion;
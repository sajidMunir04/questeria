import { useState } from "react";
import QuestionHeader from "../common/QuestionHeader";
import { QuestionProps } from "./QuestionProps";
import OutlinedButton from "../common/OutlinedButton";
import QuestionInputField from "../common/QuestionInputField";

export const blankLine : string = '____________________';


function FillBlanksQuestion(props : QuestionProps) {

    const [textSections,setTextSections] = useState<string[]>([' ',blankLine]);

    return (<div>
        <QuestionHeader questionIndex={props.index} onDeleteButtonClick={props.deleteQuestion} />
        <div className='bg-white p-8'>
            <div className='flex flex-wrap'>
            {textSections.map(function(item) {
                if (item !== blankLine) {
                    return <div className='w-max'><QuestionInputField defaultValue={item} canEdit={false}/></div>
                }
                else {
                    return <div className='relative w-auto'><p className='absolute top-4'>{item}</p><p className='z-0'>{item}</p></div>
                }
            })}
            {<div>
                <OutlinedButton buttonText={"Add Blank"} onClick={() => {
                    const newSections = [...textSections,blankLine,' '];
                    setTextSections(newSections);
                }}/>
              </div>}
            </div>
            <div>
                
            </div>
        </div>
    </div>);
}

export default FillBlanksQuestion;
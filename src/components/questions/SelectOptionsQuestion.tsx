import { useState } from "react";
import OutlinedButton from "../common/OutlinedButton";
import QuestionHeader from "../common/QuestionHeader";
import { QuestionProps } from "./QuestionProps";
import QuestionInputField from "../common/QuestionInputField";

const selectOption = '&%&%&%&%%&';


function SelectOptionsQuestion(props : QuestionProps) {
    const [questionSections,setQuestionSections] = useState<string[]>([' ',selectOption]);
    const [selectOptions,setSelectOptions] = useState<string[][]>([['Any']]);

    return (<div>       
        <QuestionHeader questionIndex={props.index} onDeleteButtonClick={props.deleteQuestion} 
        onMoveDownButtonClick={props.moveDown} onMoveUpButtonClick={props.moveUp}/>
        <div className='bg-white p-8'>
            <div className='flex'>
                {questionSections.map(function (item,index) {
                    if (item !== selectOption) {
                        return (<div>
                            <QuestionInputField defaultValue={item} canEdit={false}/>
                            </div>);
                    }
                    else{
                        return (<select>
                            {selectOptions.length > index && selectOptions[index].map((optionItem) => <option>{optionItem}</option>)}
                            </select>);
                    }
                })}
            </div>
            <div>
                <OutlinedButton buttonText={"Add Text"} onClick={() => {
                    const sections = [...questionSections,' '];
                    setQuestionSections(sections);
                }}/>
            </div>
            <div>
                <OutlinedButton buttonText={"Add Select Option"} onClick={() => {
                    const sections = [...questionSections,selectOption];
                    setQuestionSections(sections);
                }}/>
            </div>
        </div>
    </div>);
}

export default SelectOptionsQuestion;
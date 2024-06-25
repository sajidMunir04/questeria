import { useState } from "react";
import OutlinedButton from "../common/OutlinedButton";
import QuestionHeader from "../common/QuestionHeader";
import { QuestionProps } from "./QuestionProps";
import QuestionInputField from "../common/QuestionInputField";

const selectOption = '&%&%&%&%%&';

function SelectOptionsQuestion(props : QuestionProps) {
    const [questionSections,setQuestionSections] = useState<string[]>([]);
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
                        return (<div className='flex flex-col justify-center border-2 m-1 text-center'>
                            {selectOptions.length > index && selectOptions[index].map((optionItem) => <input className='bg-slate-100 mb-1 border-slate-300 w-full' defaultValue={'Empty'}/>)}
                            <OutlinedButton buttonText={"Add Option"} onClick={() => {
                                const modifiedSelectOptions = [...selectOptions[index],'-------'];
                                const previousOptions = selectOptions.filter((item,itemIndex) => index !== itemIndex);
                                const newOptions = [...previousOptions,modifiedSelectOptions];
                                setSelectOptions(newOptions);
                            }}/>
                            </div>);
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
                    const newSelectOptions = [...selectOptions,['']];
                    setSelectOptions(newSelectOptions);
                    setQuestionSections(sections);
                }}/>
            </div>
        </div>
    </div>);
}

export default SelectOptionsQuestion;
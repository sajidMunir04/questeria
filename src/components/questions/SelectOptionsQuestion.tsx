import { ChangeEvent, useState } from "react";
import OutlinedButton from "../common/OutlinedButton";
import QuestionHeader from "../common/QuestionHeader";
import { QuestionProps } from "./QuestionProps";
import QuestionInputField from "../common/QuestionInputField";
import SimpleButton from "../common/SimpleButton";

const selectOption = '&%&%&%&%%&';

function SelectOptionsQuestion(props : QuestionProps) {
    const [questionSections,setQuestionSections] = useState<string[]>([]);
    const [selectOptions,setSelectOptions] = useState<string[][]>([['Any']]);

    const [textSectionsCount,setTextSectionsCount] = useState(0);
    const [optionsDropDownCount,setOptionsDropDownCount] = useState(0); 

    return (<div>       
        <QuestionHeader questionIndex={props.index} onDeleteButtonClick={props.deleteQuestion} 
        onMoveDownButtonClick={props.moveDown} onMoveUpButtonClick={props.moveUp}/>
        <div className='bg-white p-8'>
            <div className='flex flex-wrap'>
                {questionSections.map(function (item,index) {
                    if (item !== selectOption) {
                        return (<div>
                                <QuestionInputField defaultValue={item} canEdit={false} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                            const sections = questionSections;
                                            sections[index] = e.target.value;
                                            setQuestionSections(sections);
                                        }}/>
                                </div>);
                    }
                    else{
                        return (<div className='flex flex-col justify-center border-2 m-1 text-center'>
                            {selectOptions.length > index && selectOptions[index].map((optionItem) => <input className='bg-slate-100 mb-1 border-slate-300 w-full' defaultValue={optionItem}/>)}
                            <SimpleButton buttonText={"Add Option"} onClick={() => {
                                const modifiedSelectOptions = [...selectOptions[index],'-------'];
                                const previousOptions = selectOptions.filter((item,itemIndex) => index !== itemIndex);
                                const newOptions = [...previousOptions,modifiedSelectOptions];
                                setSelectOptions(newOptions);
                            }}/>
                            </div>);
                    }
                })}
            {((questionSections.length === 0 || questionSections[questionSections.length - 1] === selectOption) && textSectionsCount < 3) && <div className='w-1/6'>
                <OutlinedButton buttonText={"Add Text"} onClick={() => {
                    const sections = [...questionSections,' '];
                    setQuestionSections(sections);
                    setTextSectionsCount(textSectionsCount + 1);
                }}/>
            </div>}
            {((questionSections.length === 0 || questionSections[questionSections.length - 1] !== selectOption) && optionsDropDownCount < 3) &&  <div className='w-1/6'>
                <OutlinedButton buttonText={"Add Options"} onClick={() => {
                    const sections = [...questionSections,selectOption];
                    const newSelectOptions = [...selectOptions,['']];
                    setSelectOptions(newSelectOptions);
                    setQuestionSections(sections);
                    setOptionsDropDownCount(optionsDropDownCount + 1);
                }}/>
            </div>}
            </div>

        </div>
    </div>);
}

export default SelectOptionsQuestion;
import { ChangeEvent, useState } from "react";
import OutlinedButton from "../common/OutlinedButton";
import QuestionHeader from "../common/QuestionHeader";
import { QuestionProps } from "./QuestionProps";
import QuestionInputField from "../common/QuestionInputField";
import SimpleButton from "../common/SimpleButton";
import { SelectOptionsQuestionData } from "../../utils/SelectOptionsQuestionData";
import { blankArea, questionDataSeparator, selectOptionsQuestionAlias } from "../../lib/constants";


function SelectOptionsQuestion(props : QuestionProps) {
    const [questionSections,setQuestionSections] = useState<string[]>([]);
    const [selectOptions,setSelectOptions] = useState<string[][]>();
    const [canEdit,setEditStatus] = useState(true);

    const [textSectionsCount,setTextSectionsCount] = useState(0);
    const [optionsDropDownCount,setOptionsDropDownCount] = useState(0); 

    const handleDataChange = () => {
        const questionData : SelectOptionsQuestionData = {
            questionSections: questionSections,
            answerOptions: selectOptions!
        }

        props.handleDataChange(JSON.stringify(questionData) + questionDataSeparator + selectOptionsQuestionAlias,props.index);
    }

    return (<div>       
        <QuestionHeader questionIndex={props.index} onDeleteButtonClick={props.deleteQuestion} 
        onMoveDownButtonClick={props.moveDown} onMoveUpButtonClick={props.moveUp}/>
        <div className='bg-white p-8'>
            <div className='flex flex-wrap'>
                {questionSections.map(function (item,index) {
                    if (item !== blankArea) {
                        return (<div>
                                <QuestionInputField defaultValue={item} canEdit={false} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                            const sections = questionSections;
                                            sections[index] = e.target.value;
                                            setQuestionSections(sections);
                                        }}/>
                                </div>);
                    }
                    else{
                        return (<div className='flex flex-col border-2 m-1 text-center justify-start'>
                            {selectOptions!.length > index && selectOptions![index].map((optionItem) => <input className='bg-slate-100 mb-1 border-slate-300 w-full' defaultValue={optionItem}/>)}
                            <SimpleButton buttonText={"Add Option"} onClick={() => {
                                console.log(selectOptions);
                                let modifiedSelectOptions = selectOptions![index-1];
                                modifiedSelectOptions.push('Option');
                                let previousOptions = selectOptions;
                                previousOptions![index] = modifiedSelectOptions;
                                setSelectOptions([...previousOptions!]);
                            }}/>
                            </div>);
                    }
                })}
            {((questionSections.length === 0 || questionSections[questionSections.length - 1] === blankArea) && textSectionsCount < 3) && <div className='w-1/6'>
                <OutlinedButton buttonText={"Add Text"} onClick={() => {
                    const sections = [...questionSections,' '];
                    setQuestionSections(sections);
                    setTextSectionsCount(textSectionsCount + 1);
                }}/>
            </div>}
            {((questionSections.length === 0 || questionSections[questionSections.length - 1] !== blankArea) && optionsDropDownCount < 3) &&  <div className='w-1/6'>
                <OutlinedButton buttonText={"Add Options"} onClick={() => {
                    const sections = [...questionSections,blankArea];
                    const newSelectOptions = selectOptions === undefined ? [['Option']] :  [...selectOptions!,['Option']];
                    setSelectOptions(newSelectOptions);
                    setQuestionSections(sections);
                    setOptionsDropDownCount(optionsDropDownCount + 1);
                }}/>
            </div>}
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

export default SelectOptionsQuestion;
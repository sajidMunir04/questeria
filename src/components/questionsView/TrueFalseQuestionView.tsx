import { useState } from "react";
import QuestionText from "./questionsComponents/QuestionText";


interface Props {
    questionText: string
}


function TrueFalseQuestionView(props : Props) {

    const [answerState,setAnswerState] = useState<AnswerState>(AnswerState.NotSelected);

    return (<div>
        <QuestionText questionText={props.questionText}/>
        <div>
        <div className={`flex mb-3 items-center p-2 ${answerState === AnswerState.AnswerIsTrue && 'border-4 border-black rounded-xl'}`} onClick={() => {
            setAnswerState(AnswerState.AnswerIsTrue);
        }}>
            <div className='ml-2 rounded-full border-solid border-2 w-8 h-8 flex border-black'>
            <p className='m-auto'>&#10004;</p>
            </div>
            <p className='ml-5'>True</p>
        </div>
        <div className={`flex mb-3 items-center p-2 ${answerState === AnswerState.AnswerIsFalse && 'border-4 border-black rounded-xl'}`} onClick={()=>{setAnswerState(AnswerState.AnswerIsFalse)}}>
            <div className='ml-2 rounded-full  border-solid border-2 w-8 h-8 flex border-black'>
            <p className='m-auto'>&#10004;</p>
            </div>
            <p className='ml-5'>False</p>
        </div>
        </div>
    </div>);
}


const enum AnswerState {
    NotSelected,
    AnswerIsTrue,
    AnswerIsFalse
}

export default TrueFalseQuestionView;
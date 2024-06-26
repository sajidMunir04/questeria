import { useState } from "react";
import QuestionText from "../questionsComponents/QuestionText";


function TrueFalseQuestionView(props : QuestionViewProps) {

    const [questionText,setQuestionText] = useState<string>('');

    return (<div>
        <QuestionText questionText={questionText}/>
        <div>
        <div className='flex mb-3 items-center'>
            <div className='ml-2 rounded-full border-sky-500 border-solid border-2 w-8 h-8 flex'>
            <p className='text-sky-500 m-auto'>&#10004;</p>
            </div>
            <p className='ml-5'>True</p>
        </div>
        <div className={`flex mb-3 items-center`}>
            <div className='ml-2 rounded-full border-sky-500 border-solid border-2 w-8 h-8 flex'>
            <p className='text-sky-500 m-auto'>&#10004;</p>
            </div>
            <p className='ml-5'>False</p>
        </div>
        </div>
    </div>);
}

export default TrueFalseQuestionView;
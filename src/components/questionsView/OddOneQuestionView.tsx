import { useState } from "react";
import QuestionText from "./questionsComponents/QuestionText";

interface Props {
    questionText: string,
    answers: string[]
}

function OddOneQuestionView (props : Props) {

    const [selectedOptionIndex,setSelectedIndex] = useState(-1);

    return (<div>
            <QuestionText questionText={props.questionText}/>
            <div>
                {props.answers.map((item,index) => <div onClick={() => setSelectedIndex(index)} className={`bg-white mb-3 rounded-xl cursor-pointer text-center font-poppinsSemiBold ${selectedOptionIndex === index && 'after:absolute after:left-0 after:top-1/2 after:h-4 after:w-full'}`}><p className='text-2xl'>{item}</p></div>)}
            </div>
    </div>);
}

export default OddOneQuestionView;
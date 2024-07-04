import { useState } from "react";
import QuestionText from "./questionsComponents/QuestionText";


interface Props {
    questionText: string,
    answers: string[]
}


function MultipleChoiceQuestionView(props : Props) {

    const [selectedIndex,setSelectedIndex] = useState<number>(-1);

    return (<div className='flex flex-col justify-center items-center'>
        <QuestionText questionText={props.questionText}/>
        <div className='w-full ps-12 pt-9'>
        {props.answers !== undefined && props.answers.map((item,index) => <div onClick={() => {setSelectedIndex(index)}} className='flex items-center justify-start cursor-pointer'>
            <div className='bg-white w-4 h-4 rounded-full flex items-center justify-center'>
                {selectedIndex === index && <div className='w-3 h-3 bg-purple-background rounded-full' ></div>}
            </div>
            <p className='ml-2 font-poppinsMedium text-2xl'>{item}</p>
            </div>)}
        </div>
    </div>);
}

export default MultipleChoiceQuestionView;
import { useState } from "react";


interface Props {
    questionText: string,
    answers: string[]
}


function MultipleChoiceQuestionView(props : Props) {

    const [selectedIndex,setSelectedIndex] = useState<number>(-1);

    return (<div className='flex flex-col justify-center items-center'>
        <p className='font-poppinsMedium text-3xl'>{props.questionText}</p>
        <div>
        {props.answers !== undefined && props.answers.map((item,index) => <div onClick={() => {setSelectedIndex(index)}} className='flex items-center justify-start'>
            <div className='bg-white w-4 h-4 rounded-full flex items-center justify-center'>
                {selectedIndex === index && <div className='w-3 h-3 bg-purple-background rounded-full' ></div>}
            </div>
            <p className='ml-6'>{item}</p>
            </div>)}
        </div>
    </div>);
}

export default MultipleChoiceQuestionView;
import { useState } from "react";


interface Props {
    questionText: string,
    answers: string[]
}


function MultipleChoiceQuestionView(props : Props) {

    const [selectedIndex,setSelectedIndex] = useState<number>(-1);

    return (<div className='w-full h-full flex flex-col justify-center items-center text-left justify-stretch'>
        <p className='font-poppinsMedium text-xl text-left'>{props.questionText}</p>
        <div>
        {props.answers !== undefined && props.answers.map((item,index) => <div onClick={() => {setSelectedIndex(index)}} className='flex items-center justify-start'>
            <div className='bg-white w-3 h-3 rounded-full flex'>
                {selectedIndex === index && <div className='w-2 h-2 bg-purple-background rounded-full m-auto' ></div>}
            </div>
            <p className='ml-6'>{item}</p>
            </div>)}
        </div>
    </div>);
}

export default MultipleChoiceQuestionView;
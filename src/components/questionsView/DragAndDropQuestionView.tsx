import { blankArea } from "../../lib/constants";
import QuestionText from "./questionsComponents/QuestionText";

interface Props {
    questionSections: string[],
    answers: string[]
}



function DragAndDropQuestionView(props : Props) {
    return (<div>
        <div className='flex'>
            {props.questionSections.map((item) => (item !== blankArea ? <QuestionText questionText={item}/> : 
            <div className='w-20ch border-black border-b-2'></div>))}
        </div>
        <div>
            {props.answers.map((item) => <div className='bg-white w-min p-2 rounded-md mb-1'><p className='font-poppinsSemiBold text-3xl'>{item}</p></div>)}
        </div>
    </div>);
}

export default DragAndDropQuestionView;
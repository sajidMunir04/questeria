import { blankArea } from "../../lib/constants";

interface Props {
    questionSections: string[],
    answers: string[]
}



function DragAndDropQuestionView(props : Props) {
    return (<div>
        <div className='flex'>
            {props.questionSections.map((item) => (item !== blankArea ? <p>{item}</p> : <p>_______</p>))}
        </div>
        <div>
            {props.answers.map((item) => <div><p>{item}</p></div>)}
        </div>
    </div>);
}

export default DragAndDropQuestionView;
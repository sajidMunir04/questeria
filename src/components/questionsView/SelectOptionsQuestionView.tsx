import { blankArea } from "../../lib/constants";
import BlankArea from "./questionsComponents/BlankArea";
import QuestionText from "./questionsComponents/QuestionText";

interface Props {
    questionSections: string[],
    answerOptions: string[][]
}


function SelectOptionsQuestionView(props : Props) {
    return (<div>
        <div className='flex'>  
            {props.questionSections.map(function(item,index) {
                if (item === blankArea){
                    return <select className='bg-white mx-2.5 p-2 rounded-lg'>{props.answerOptions[index-1].map((answerOption) => <option>{answerOption}</option>)}</select>
                }
                else {
                    return <QuestionText questionText={item}/>
                }
            })}
        </div>
    </div>);
}

export default SelectOptionsQuestionView;
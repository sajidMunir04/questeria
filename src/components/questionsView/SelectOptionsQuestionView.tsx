import { blankArea } from "../../lib/constants";
import BlankArea from "./questionsComponents/BlankArea";
import QuestionText from "./questionsComponents/QuestionText";

interface Props {
    questionSections: string[],
    answerOptions: string[][]
}


function SelectOptionsQuestionView(props : Props) {
    return (<div>
        <div>  
            {props.questionSections.map(function(item,index) {
                if (item === blankArea){
                    return <BlankArea/> 
                }
                else {
                    <QuestionText questionText={item}/>
                }
            })}
        </div>
    </div>);
}

export default SelectOptionsQuestionView;
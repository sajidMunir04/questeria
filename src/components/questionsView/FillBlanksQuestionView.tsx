import { blankArea } from "../../lib/constants";
import QuestionText from "./questionsComponents/QuestionText";

interface Props {
    questionSections: string[]
}


function FillBlanksQuestionView(props : Props) {
    return (<div>
        <div className='flex'>
            {
                props.questionSections.map(function(item,index) {
                    if (item === blankArea) {
                        return <div><input className={`bg-slate-100 mb-5 h-11 border-2 rounded-s-md border-slate-300 font-poppinsSemiBold text-3xl w-20ch`} type='text'/></div>
                    }
                    else {
                        return <div><QuestionText questionText={item}/></div>
                    }
                })
            }
        </div>   
    </div>);
}

export default FillBlanksQuestionView;
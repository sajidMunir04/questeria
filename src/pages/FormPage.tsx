import { useEffect, useState } from "react";
import { fillBlanksQuestionAlias, getFormDataURL, multipleChoiceQuestionAlias, questionDataSeparator, questionSeparator, simpleQuestionAlias } from "../lib/constants";
import MultipleChoiceQuestionView from "../components/questionsView/MultipleChoiceQuestionView";
import OpenEndedQuestion from "../components/questionsView/OpenEndedQuestionView";
import FillBlanksQuestionView from "../components/questionsView/FillBlanksQuestionView";


function FormPage() {
    
    const [questionsData,setQuestionsData] = useState<string[]>([]);
    const [questionIndex,setQuestionIndex] = useState<number>(0);

    useEffect(() => {    
        const fetchData = async() => {
            const response = await fetch(getFormDataURL);
            const data = await response.json();

            setQuestionsData(data.questionData);

            console.log(data, data.questionData);
        }

        fetchData();
    },[]);


    return(<div className='w-full h-full bg-green-400 flex flex-col justify-center items-center'>
        {questionsData !== undefined && questionsData.map(function(item,index) {
            
            if (index !== questionIndex) {
                return <></>
            }

            const qData = item.split(questionDataSeparator);
            
            if (qData[1] === multipleChoiceQuestionAlias) {
                const mcqData = JSON.parse(qData[0]);
                return <MultipleChoiceQuestionView questionText={mcqData.questionText} answers={mcqData.answers}/>
            }
            else if (qData[1] === simpleQuestionAlias) {
                const mcqData = JSON.parse(qData[0]);
                return <OpenEndedQuestion questionText={mcqData.questionText}/>
            } 
            else if (qData[1] === fillBlanksQuestionAlias) {
                const mcqData = JSON.parse(qData[0]);
                return <FillBlanksQuestionView questionSections={mcqData.sections} />
            } 
            
            return <div></div>
        })}
        <button className='mt-10' onClick={() => {
            questionIndex < questionsData.length - 1 ? setQuestionIndex(questionIndex + 1) : () => {}
        }}>Next</button>
    </div>);
}

export default FormPage;
import { useEffect, useState } from "react";
import { getFormDataURL, multipleChoiceQuestionAlias, questionDataSeparator, questionSeparator } from "../lib/constants";
import MultipleChoiceQuestionView from "../components/questionsView/MultipleChoiceQuestionView";


function FormPage() {
    
    const [questionsData,setQuestionsData] = useState<string[]>([]);

    useEffect(() => {    
        const fetchData = async() => {
            const response = await fetch(getFormDataURL);
            const data = await response.json();

            setQuestionsData(data.questionData);

            console.log(data, data.questionData);
        }

        fetchData();
    },[]);


    return(<div className='w-full h-full bg-green-400'>
        {questionsData !== undefined && questionsData.map(function(item) {
            
            const qData = item.split(questionDataSeparator);
            
            if (qData[1] === multipleChoiceQuestionAlias) {
                const mcqData = JSON.parse(qData[0]);
                return <MultipleChoiceQuestionView questionText={mcqData.questionText} answers={mcqData.answers}/>
            }
            
            return <div></div>
        })}
    </div>);
}

export default FormPage;
import { useEffect, useState } from "react";
import { getFormDataURL, questionSeparator } from "../components/lib/constants";
import QuizQuestion from "../components/common/QuizQuestion";


function FormPage() {
    
    const [questionsData,setQuestionsData] = useState<string[]>([]);

    const data = '';

    const filteredData = data.split(questionSeparator);

    setQuestionsData(filteredData);

    useEffect(() => {    
        const fetchData = async() => {
            const response = await fetch(getFormDataURL);
            const data = await response.json();
            console.log(data);
        }

        fetchData();
    },[questionsData.length]);



    return(<div>
        {questionsData.map((item) => <QuizQuestion inputQuestion={item}/>)}
    </div>);
}

export default FormPage;
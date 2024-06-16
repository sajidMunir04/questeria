import { useState } from "react";
import { questionSeparator } from "../components/lib/constants";
import QuizQuestion from "../components/common/QuizQuestion";


function FormPage() {
    
    const [questionsData,setQuestionsData] = useState<string[]>([]);

    const data = '';

    const filteredData = data.split(questionSeparator);

    setQuestionsData(filteredData);

    return(<div>
        {questionsData.map((item) => <QuizQuestion inputQuestion={item}/>)}
    </div>);
}

export default FormPage;
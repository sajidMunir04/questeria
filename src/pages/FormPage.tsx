import { useEffect, useState } from "react";
import { getFormDataURL, questionSeparator } from "../components/lib/constants";
import QuizQuestion from "../components/common/QuizQuestion";


function FormPage() {
    
    const [questionsData,setQuestionsData] = useState<string[]>([]);

    useEffect(() => {    
        const fetchData = async() => {
            const response = await fetch(getFormDataURL);
            const data = await response.json();
            console.log(data);
        }

        fetchData();
    },[]);



    return(<div>
        <p>FORM PAGE</p>
    </div>);
}

export default FormPage;
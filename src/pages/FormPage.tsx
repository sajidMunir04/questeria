import { useEffect, useState } from "react";
import { getFormDataURL, questionSeparator } from "../lib/constants";


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
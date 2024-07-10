import { useEffect, useState } from "react";
import { OddOneQuestionAlias, correctOrderQuestionAlias, dragAndDropQuestionAlias, fillBlanksQuestionAlias, getFormDataURL, matchingQuestionAlias, multipleChoiceQuestionAlias, questionDataSeparator, questionSeparator, selectOptionsQuestionAlias, simpleQuestionAlias, trueFalseQuestionAlias } from "../lib/constants";
import MultipleChoiceQuestionView from "../components/questionsView/MultipleChoiceQuestionView";
import OpenEndedQuestion from "../components/questionsView/OpenEndedQuestionView";
import FillBlanksQuestionView from "../components/questionsView/FillBlanksQuestionView";
import { MultipleChoiceQuestionData } from "../utils/MultipleChoiceQuestionData";
import { SimpleQuestionData } from "../utils/SimpleQuestionData";
import { FillBlanksQuestionData } from "../utils/FillBlanksQuestionData";
import { OddOneQuestionData } from "../utils/OddOneQuestionData";
import { CorrectOrderQuestionData } from "../utils/CorrectOrderQuestionData";
import { SelectOptionsQuestionData } from "../utils/SelectOptionsQuestionData";
import { TrueFalseQuestionData } from "../utils/TrueFalseQuestionData";
import OddOneQuestionView from "../components/questionsView/OddOneQuestionView";
import CorrectOrderQuestionView from "../components/questionsView/CorrectOrderQuestionView";
import SelectOptionsQuestionView from "../components/questionsView/SelectOptionsQuestionView";
import TrueFalseQuestionView from "../components/questionsView/TrueFalseQuestionView";
import { DragAndDropQuestionData } from "../utils/DragAndDropQuestionData";
import DragAndDropQuestionView from "../components/questionsView/DragAndDropQuestionView";
import { MatchingQuestionData } from "../utils/MatchingQuestionData";
import MatchingQuestionView from "../components/questionsView/MatchingQuestionView";


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
        {questionsData.length > 0 && <p className='font-poppinsSemiBold text-xl mb-16'>Question {questionIndex + 1} of {questionsData.length}</p>}
        {questionsData !== undefined && questionsData.map(function(item,index) {
            
            if (index !== questionIndex) {
                return <></>
            }

            const qData = item.split(questionDataSeparator);
            
            if (qData[1] === multipleChoiceQuestionAlias) {
                const data : MultipleChoiceQuestionData = JSON.parse(qData[0]);
                return <MultipleChoiceQuestionView questionText={data.questionText} answers={data.answers}/>
            }
            else if (qData[1] === simpleQuestionAlias) {
                const data : SimpleQuestionData = JSON.parse(qData[0]);
                return <OpenEndedQuestion questionText={data.questionText}/>
            } 
            else if (qData[1] === fillBlanksQuestionAlias) {
                const data : FillBlanksQuestionData = JSON.parse(qData[0]);
                return <FillBlanksQuestionView questionSections={data.questionSections} />
            } 
            else if (qData[1] === OddOneQuestionAlias) {
                const data : OddOneQuestionData = JSON.parse(qData[0]);
                return <OddOneQuestionView questionText={data.questionText} answers={data.answers}/>
            } 
            else if (qData[1] === correctOrderQuestionAlias) {
                const data : CorrectOrderQuestionData = JSON.parse(qData[0]);
                return <CorrectOrderQuestionView questionText={data.questionText} answers={data.answers}/>
            } 
            else if (qData[1] === selectOptionsQuestionAlias) {
                const data : SelectOptionsQuestionData = JSON.parse(qData[0]);
                return <SelectOptionsQuestionView questionSections={data.questionSections} answerOptions={data.answerOptions}/>
            } 
            else if (qData[1] === trueFalseQuestionAlias) {
                const data : TrueFalseQuestionData = JSON.parse(qData[0]);
                return <TrueFalseQuestionView questionText={data.questionText}/>
            } 
            else if (qData[1] === dragAndDropQuestionAlias) {
                const data : DragAndDropQuestionData = JSON.parse(qData[0]);
                return <DragAndDropQuestionView questionSections={data.questionSections} answers={data.answers}/>
            } 
            else if (qData[1] === matchingQuestionAlias) {
                const data : MatchingQuestionData = JSON.parse(qData[0]);
                return <MatchingQuestionView questionText={data.questionText} firstAnswers={data.firstAnswers} 
                secondAnswers={data.secondAnswers}/>
            } 
            
            return <div></div>
        })}
        {questionsData.length > 0 && <button className='mt-10' onClick={() => {
            questionIndex < questionsData.length - 1 ? setQuestionIndex(questionIndex + 1) : () => {}
        }}>Next</button>}
    </div>);
}

export default FormPage;
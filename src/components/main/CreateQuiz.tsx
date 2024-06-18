import { ChangeEvent, Key, useState } from "react";
import { multipleChoiceQuestionAlias, saveFormDataURL, simpleQuestionAlias, yesNoQuestionAlias } from "../lib/constants";
import SimpleButton from "../common/SimpleButton";
import MultipleChoiceQuestion from "../questions/MultipleChoiceQuestion";
import { QuestionsType } from "../utils/questions";
import YesNoQuestion from "../questions/YesNoQuestion";
import SimpleQuestion from "../questions/SimpleQuestion";


function CreateQuiz() {

    const [addingQuestion, setQuestionAddStatus] = useState(false);
    const [quizQuestions,setQuizQuestions] = useState<QuestionsType[]>([]);
    const [questionsData,setQuestionsData] = useState<string[]>([]);

    const handleMultipleChoiceQuestionButton = () => {
        const questions = [...quizQuestions,QuestionsType.MultipleChoiceQuestion];
        const questionData = [...questionsData,''];
        setQuestionsData(questionData);
        setQuizQuestions(questions);
        setQuestionAddStatus(false);
    }

    const handleYesNoQuestionButton = () => {
        const questions = [...quizQuestions,QuestionsType.YesNoQuestion];
        const questionData = [...questionsData,''];
        setQuestionsData(questionData);
        setQuizQuestions(questions);
        setQuestionAddStatus(false);
    }


    const handleSimpleQuestion = () => {
        const questions = [...quizQuestions,QuestionsType.SimpleQuestion];
        const questionData = [...questionsData,''];
        setQuestionsData(questionData);
        setQuizQuestions(questions);
        setQuestionAddStatus(false);
    }

    const handleQuestionDataChange = (newQuestionData: string,index : number) => {
        const newData = questionsData;
        for (let i = 0; i < newData.length; i++)
        {
            if (i === index) {
                newData[i] = newQuestionData;
            }   
        }

        setQuestionsData(newData);
        console.log(newData);
    }

    const handleCreateForm = async() => {
        let mergedData = '';
        questionsData.forEach((item) => mergedData += item);
        console.log(mergedData);
        const response = await fetch(saveFormDataURL,{
            method: "POST",
            body: mergedData
        })
        console.log(response);
        const result = await response.json();
        console.log(result);
    }

    return (<div className='mt-4 w-full p-10 flex flex-col justify-start'>
        <h3 className='font-poppinsBold text-36px'>Create New Quiz</h3>
        {
            quizQuestions.map(function (item: QuestionsType,index: number){
                if (item === QuestionsType.MultipleChoiceQuestion) {
                    return <MultipleChoiceQuestion index={index} canEdit={false} handleDataChange={handleQuestionDataChange}/>
                }
                else if (item === QuestionsType.YesNoQuestion) {
                    return <YesNoQuestion canEdit={false} index={index} handleDataChange={handleQuestionDataChange}/>
                } 
                else if (item === QuestionsType.SimpleQuestion) {
                    return <SimpleQuestion canEdit={false} index={index} handleDataChange={handleQuestionDataChange}/>
                }
            })
        }
        {addingQuestion && <div className='flex flex-col justify-between h-40'>
            <SimpleButton buttonText={"Multiple Choice Question"} onClick={handleMultipleChoiceQuestionButton}/>
            <SimpleButton buttonText={"Yes No Question"} onClick={handleYesNoQuestionButton}/>
            <SimpleButton buttonText={"Simple Question"} onClick={handleSimpleQuestion}/>
        </div>}
        <div className='mt-8'>
            <button onClick={() => setQuestionAddStatus(true)}>Add Question</button>
        </div>
        <div>
            <SimpleButton buttonText={"Create Form"} onClick={handleCreateForm} />
        </div>
    </div>);
}

export default CreateQuiz;
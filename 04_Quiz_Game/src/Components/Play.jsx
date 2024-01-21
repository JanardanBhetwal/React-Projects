import Api from "../Api";
import ShowQns from "./ShowQns";
import { useState } from "react";

function Play() {
  const initialData = [
    { question: "", incorrect_answers: [], correct_answer: "" },
  ];
  const [questions, setQuestion] = useState(initialData);
  const handleSubmit = async () => {
    const data = await Api();
    setQuestion(data);
    console.log(data);
  };

  return (
    <div>
      <ShowQns onSubmit={handleSubmit} questions={questions} />
    </div>
  );
}

export default Play;

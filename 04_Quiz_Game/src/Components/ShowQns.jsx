import { useReducer } from "react";
import Options from "./Options";

const SCORE = "score";
const QUESTION = "question";
const DISABLE = "disable";
const NEXTDISABLE = "nextDisable";
const COLOR = "color";
const CLICKEDANS = "clickedans";

function ShowQns({ onSubmit, questions }) {
  console.log(questions);
  const correct = questions[0].correct_answer;
  const reducer = (state, action) => {
    switch (action.type) {
      case SCORE:
        return {
          ...state,
          score: state.score + 10,
        };
      case QUESTION:
        const shuffleArray = (array) => {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
        };
        const valuesArray = [
          questions[0].correct_answer,
          questions[0].incorrect_answers[0],
          questions[0].incorrect_answers[1],
          questions[0].incorrect_answers[2],
        ];
        shuffleArray(valuesArray);
        return {
          ...state,
          question: questions[0].question,
          options: valuesArray,
          disable: false,
          nextDisable: true,
        };
      case DISABLE:
        return { ...state, disable: true };
      case NEXTDISABLE:
        return { ...state, nextDisable: false };
      case CLICKEDANS:
        return { ...state, clickedAns: action.payload };
      case COLOR:
        if (state.disable) {
          const colorArray = state.options.map((option, index) => {
            if (state.clickedans === option) {
              return state.clickedans === correct
                ? "bg-green-500"
                : "bg-red-500";
            } else {
              return "bg-blue-500";
            }
          });

          return {
            ...state,
            color: colorArray,
          };
        }
        return state;
    }
  };

  const handleNextClick = async () => {
    await onSubmit();
    dispatch({ type: QUESTION });
  };

  const [state, dispatch] = useReducer(reducer, {
    score: 0,
    question: "",
    options: [],
    disable: false,
    nextDisable: false,
    color: ["bg-sky-500", "bg-sky-500", "bg-sky-500", "bg-sky-500"],
    clickedans: "",
  });

  const handleAnsClick = (content) => {
    dispatch({ type: CLICKEDANS, payload: content });
    dispatch({ type: DISABLE });
    dispatch({ type: NEXTDISABLE });
    if (content === correct) {
      dispatch({ type: SCORE });
    }
    dispatch({ type: COLOR });
  };

  return (
    <div className=" h-screen bg-gray-200 flex justify-center">
      {/* <div>SCORE={state.score}</div> */}
      <div className="flex flex-col p-8 items-center mt-16 bg-white w-2/3 h-3/4 rounded-md">
        <div className="bg-rose-500 p-2 rounded-md text-white m-4">
          <p className="font-bold text-2xl text-center">{state.question}</p>
        </div>
        <div className="flex flex-col justify-evenly text-xl p-4 w-full h-full m-4">
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col">
              <Options
                onSubmit={handleAnsClick}
                option={state.options[0]}
                // clickedAns={clickedAns}
                // correct={correct}
                disable={state.disable}
                color={state.color[0]}
              />

              <Options
                onSubmit={handleAnsClick}
                option={state.options[1]}
                // clickedAns={clickedAns}
                // correct={correct}
                disable={state.disable}
                color={state.color[1]}
              />
            </div>

            <div className="flex flex-col">
              <Options
                onSubmit={handleAnsClick}
                option={state.options[2]}
                // clickedAns={clickedAns}
                // correct={correct}
                disable={state.disable}
                color={state.color[2]}
              />

              <Options
                onSubmit={handleAnsClick}
                option={state.options[3]}
                // clickedAns={clickedAns}
                // correct={correct}
                disable={state.disable}
                color={state.color[3]}
              />
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={handleNextClick}
            disabled={state.nextDisable}
            className="bg-orange-400 px-4 py-2 text-white font-bold text-xl rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowQns;

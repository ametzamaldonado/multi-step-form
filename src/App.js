import { useState } from "react";
import "./App.scss";
import { MultiStepForm } from "./components/MultiStepForm";
import { questions } from "./data/questions";

function App() {
  const [index, setIndex] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [pagesAnswers, setPagesAnswers] = useState({});

  const previousButton = () => {
    if (index > 1) {
      setIndex(index - 1);
    }
  };

  const nextButton = () => {
    if (3 - index) {
      // usage of number 3 b/c there are only 3 pages of questions
      setIndex(index + 1);
    } else {
      // only applicable to the last page
      setSubmitted(true);
    }
  };

  const onPageAnswerUpdate = (id, value) => {
    setPagesAnswers({ ...pagesAnswers, [id]: value });
  };

  return (
    <div className="App">
      <div className="form-components">
        {submitted ? 
        (
          <h2>Your answers have been submitted!</h2>
        ) : 
        (
          <div className="form-container">
            <div className="form-questions">
              <MultiStepForm
                questions={questions}
                step={index}
                onPageAnswerUpdate={onPageAnswerUpdate}
                pagesAnswers={pagesAnswers}
              />
            </div>
            <div className="form-buttons">
              {
                index > 1 ?  
                <button onClick={previousButton} disabled={index === 1}>
                  Previous
                </button> 
                :
                null
              }
              
              <button onClick={nextButton}>
                {index === 3 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

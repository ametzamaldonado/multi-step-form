import React from "react";
import { FormItemType } from "./FormItemType";

export const MultiStepForm = (props) => {
  const { questions, step, onPageAnswerUpdate, pagesAnswers } = props;

  return (
    <div className="text-left">
      {questions[step - 1].items?.map((item, index) => {
        return (
          <FormItemType
            key={`${index}_${item.type}`}
            item={item}
            onPageAnswerUpdate={onPageAnswerUpdate}
            answer={pagesAnswers[item.value] ? pagesAnswers[item.value] : ""}
          />
        );
      })}
    </div>
  );
};

import React from "react";

export const FormItemType = ({ item, onPageAnswerUpdate, answer }) => {
  const handleChange = (id, value) => {
    onPageAnswerUpdate(id, value);
  };

  switch (item?.type) {
    case "text":
      return (
        <>
          <label htmlFor={item.value}>{item.label}</label>
          <input
            type="text"
            id={item.value}
            onChange={(e) => handleChange(e.target.id, e.target.value)}
            value={answer}
          />
        </>
      );

    case "select":
      return (
        <>
          <label htmlFor={item.value}>{item.label}</label>
          <select
            id={item.value}
            onChange={(e) => handleChange(e.target.id, e.target.value)}
            value={answer}
          >
            <option>Select State</option>
            {item.options.map((opt, index) => {
              return (
                <option value={opt} key={index} >
                  {opt}
                </option>
              );
            })}
          </select>
        </>
      );

    case "confirmation":
      return <h3>{item.label}</h3>;

    default:
      return <></>;
  }
};

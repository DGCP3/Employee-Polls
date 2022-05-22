import multiavatar from "@multiavatar/multiavatar";
import React from "react";

const Result = ({ question }) => {
  return (
    <div>
      <h2>Results</h2>
      <div>
        <h3>{question?.optionOne?.text}</h3>
        <div>
          <h4>{question?.optionOne?.votes.length} votes</h4>
        </div>
      </div>
      <div>
        <h3>{question?.optionTwo?.text}</h3>
        <div>
          <h4>{question?.optionTwo?.votes.length} votes</h4>
        </div>
      </div>
    </div>
  );
};

export default Result;

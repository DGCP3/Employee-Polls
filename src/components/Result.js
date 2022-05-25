import React from "react";
import styled from "styled-components";
const Layout = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Progressbar = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${(prop) => prop.color};
  width: ${(prop) => prop.width}%;
`;

const Result = ({ question }) => {
  const totalVote =
    question?.optionOne?.votes.length + question?.optionTwo?.votes.length;
  const optionOnePercentage =
    (question?.optionOne?.votes.length / totalVote) * 100;
  const optionTwoPercentage =
    (question?.optionTwo?.votes.length / totalVote) * 100;
  return (
    <Layout>
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
      <div style={{ display: "flex" }}>
        <Progressbar color="blue" width={optionOnePercentage} />
        <Progressbar color="red" width={optionTwoPercentage} />
      </div>
    </Layout>
  );
};

export default Result;

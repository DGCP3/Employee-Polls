import { Container, Progressbar } from "./style";

export default function Result({ question }) {
  const totalVote =
    question?.optionOne?.votes.length + question?.optionTwo?.votes.length;
  const optionOnePercentage =
    (question?.optionOne?.votes.length / totalVote) * 100;
  const optionTwoPercentage =
    (question?.optionTwo?.votes.length / totalVote) * 100;
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <Progressbar color="#DEFF16" width={optionOnePercentage} />
        <Progressbar color="#FC3D82" width={optionTwoPercentage} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBlock: "10px",
        }}
      >
        <span>{optionOnePercentage ? optionOnePercentage.toFixed(1) : 0}%</span>
        <span>{optionTwoPercentage ? optionTwoPercentage.toFixed(1) : 0}%</span>
      </div>
    </Container>
  );
}

import { Container, Progressbar } from "./style";

export default function Result({ question }) {
  const { optionOne, optionTwo } = question;
  const totalVote = optionOne?.votes.length + optionTwo?.votes.length;
  const optionOnePercentage = (optionOne?.votes.length / totalVote) * 100;
  const optionTwoPercentage = (optionTwo?.votes.length / totalVote) * 100;
  return (
    <Container>
      <div style={{ display: "flex", backgroundColor: "#e6e6e6" }}>
        <Progressbar color="#DEFF16" width={optionOnePercentage || 0} />
        <Progressbar color="#FC3D82" width={optionTwoPercentage || 0} />
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

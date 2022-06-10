import { useEffect } from "react";
import User from "../../components/User";
import useReduxStore from "../../hooks/useReduxStore";
import { Container } from "./style";

export default function Leaderboard() {
  const {
    store: { leaderboard },
    loadLeaderboard,
  } = useReduxStore();

  useEffect(() => {
    loadLeaderboard();
  }, []);
  return (
    <Container>
      {leaderboard &&
        leaderboard.map((user) => <User key={user.id} user={user} />)}
    </Container>
  );
}

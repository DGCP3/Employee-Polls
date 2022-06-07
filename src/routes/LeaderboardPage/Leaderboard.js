import React, { useEffect, useState } from "react";
import User from "../../components/User";
import { _getLeaderboard } from "../../mock-api";
import { Container } from "./style";

export default function Leaderboard() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    _getLeaderboard().then((res) => {
      const sorted = res.sort(
        (a, b) => b.answers + b.questions - (a.answers + a.questions)
      );
      setUsers(sorted);
    });
  }, []);
  return (
    <Container>
      {users && users.map((user) => <User key={user.id} user={user} />)}
    </Container>
  );
}

import React, { useEffect, useState } from "react";
import { UserStat } from "../components/UserStat";
import { _getLeaderboard } from "../mock-api";

const Leaderboard = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    _getLeaderboard().then((res) => setData(res));
    return () => {};
  }, []);

  return (
    <div>
      {data?.map((data, index) => (
        <UserStat data={data} key={index} />
      ))}
    </div>
  );
};

export default Leaderboard;

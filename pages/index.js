import React, { useEffect } from "react";
import axios from "axios";

function Index({ user, userFollowStats }) {
  useEffect(() => {
    document.title = `Welcome, ${user.name.split(" ")[0]}`;
  }, []);

  return <div>HomePage</div>;
}

export default Index;

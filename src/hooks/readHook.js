import React, { useEffect, useState } from "react";
import axios from "axios";

function ReadHook(url) {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => setState(res.data));
  }, []);

  return state;
}

export default ReadHook;

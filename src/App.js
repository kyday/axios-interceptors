import React, { useState, useEffect } from "react";
import News from "./api/News";

function App() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    getAxios();
  }, []);

  const getAxios = () => {
    News.getAsk().then((res) => {
      setDatas(res.data);
    });
  };

  return (
    <div>
      {datas &&
        datas.map((list) => {
          return <div key={list.id}>{list.title}</div>;
        })}
    </div>
  );
}

export default App;

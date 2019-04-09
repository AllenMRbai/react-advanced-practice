import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState({ num: 0, name: "book" });

  useEffect(() => {
    console.log("there are some effect function happen after each render");
    return function cleanup() {
      console.log("clean some resource");
    };
  }, []);

  function add() {
    setCount({ ...count, num: count.num + 1 });
  }

  function minu() {
    setCount({ ...count, num: count.num - 1 });
  }

  return (
    <div className="card">
      <div className="tip">
        使用useState，给组件添加状态;使用useEffect给组件添加副作用
      </div>
      <h2>
        {count.name}数量{count.num}
      </h2>
      <button type="button" onClick={minu}>
        减
      </button>
      <button type="button" onClick={add}>
        加
      </button>
    </div>
  );
}

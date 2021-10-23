import React, {useMemo, useState} from "react";

const slow = (num) => {
  console.log("slow got called")
  return num * 2
}

const ExampleMemo = () => {
  const [count, setCount] = useState(0)
  const expensive = useMemo(() => slow(count), [count])

  const [thai, setThai] = useState(true)
  const langs = {
      lang: thai ? "ไทย" : "English",
      flag: thai ? '🇹🇭' : '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  }

  return (
    <>
      <div>expensive: {expensive}</div>
      <div>number: {count}</div>
      <button onClick={() => setCount(count + 1)}>Count UP</button>
      <button onClick={() => setCount(count - 1)}>Count DOWN</button>

      <div>Language: {`${langs.flag} ${langs.lang}`}</div>
      <button onClick={() => setThai(!thai)}>Change Language</button>
    </>
  );
};

export default ExampleMemo;



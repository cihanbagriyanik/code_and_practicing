import React, { memo, useEffect, useRef, useState } from "react";

const UseRefComp = () => {
  console.log("Render => UseRefComp componenti");
  const [text, setText] = useState("");
  const inputRef = useRef();
  const divRef = useRef();

  const handleClick = () => {
    // console.log(text);
    console.log(inputRef);
    console.log(inputRef.current);
    console.log(inputRef.current.value);
    setText(inputRef.current.value);
    inputRef.current.value = "";

    console.log(divRef);
    console.log(divRef.current);
    console.log(divRef.current.firstElementChild);
    console.log(divRef.current.lastElementChild);
    console.log(divRef.current.lastElementChild.lastElementChild.innerText);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div ref={divRef}>
      <h1>UseRefComp</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <input type="text" value={text} onChange={e=> setText(e.target.value)} />
          <button type="button" onClick={handleClick}>Search</button> */}
        <input type="text" ref={inputRef} />
        <button type="button" onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  );
};

export default memo(UseRefComp);

import React, { useState } from "react";

function Props({name ,age}) {
  const [text, setText] = useState("Well Came to our Site");
  return (
    <div>
     <h1> {text}</h1>
      <button onClick={() => setText("Thank you for Subscribed The Channel")}>
        Subscribe
      </button>
    </div>
  );
}

export default Props;

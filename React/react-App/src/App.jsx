import React from "react";

import ChatInput from "./Componet/ChatbotInput";
import Props from "./Componet/Props";
import Counter from "./Componet/Counter";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <ChatInput />
      <br />
      <br />
      <ChatInput />
      <Props />
      <Counter/>
    </>
  );
}

export default App;

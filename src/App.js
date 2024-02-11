import { useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState("");
  const [show, setShow] = useState(false);
  const onClick = async () => {
    // return await new Promise(async (res, rej) => {
    //   setTimeout(async () => {
    //     res(() => {
    //       setContent("clicked");
    //       setShow(true);
    //     });
    //   }, 2000);
    // });

    setShow(true);
    setContent("clicked");
  };
  return (
    <div className="App">
      <h1>Hello world..!</h1>
      <button onClick={() => onClick()}>click here</button>
      {show && <p data-testid="content">{content}</p>}
    </div>
  );
}

export default App;

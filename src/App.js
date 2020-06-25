import React, { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";
import SassComponent from "./SassComponent";

const App = () => {
  // const [visible, setVisible] = useState(false);
  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         setVisible(!visible);
  //       }}
  //     >
  //       {visible ? "숨기기" : "보이기"}
  //     </button>
  //     <hr />
  //     {visible && <Info />}
  //   </div>
  // );
  // return <Counter />;
  // return <Info />;
  // return <Average />;
  return (
    <div>
      <SassComponent />
    </div>
  );
};
export default App;

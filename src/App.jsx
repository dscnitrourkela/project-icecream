import React from "react";

// Components
import { FramesCtxProvider } from "./store/contexts/frames.context";
import Frames from "./pages/Frame";

const App = () => {
  return (
    <FramesCtxProvider>
      <Frames />
    </FramesCtxProvider>
  );
};

export default App;

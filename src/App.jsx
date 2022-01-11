import React from "react";

// Components
import Frames from "./pages/Frame";
import { FramesCtxProvider } from "./store/contexts/frames.context";

const App = () => {
  return (
    <FramesCtxProvider>
      <Frames />
    </FramesCtxProvider>
  );
};

export default App;

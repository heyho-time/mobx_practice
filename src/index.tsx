import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "./stores/Context";
import { RootStore } from "./stores/RootStore";
import App from "./App";

//rootStore 하나로 모든 스토어를 사용할 수 있다.
const rootStore = new RootStore();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider value={rootStore}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

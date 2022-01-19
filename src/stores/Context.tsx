import * as React from "react";
import { RootStore } from "./RootStore";

export const StoreContext = React.createContext(new RootStore());
export const StoreProvider = StoreContext.Provider;

export const useStore = () => React.useContext(StoreContext);
//useContext를 이용해 스토어를 이용할 수 있는 훅을 생성한다.
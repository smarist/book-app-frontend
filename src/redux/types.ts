// import { store } from "./index";

// export type RootState = ReturnType<typeof store.getState>

// export type DispatchType = typeof store.dispatch

import { store } from "./index";
import { Action, Dispatch } from "redux";

export type RootState = ReturnType<typeof store.getState>;

export type DispatchType = Dispatch<Action>;

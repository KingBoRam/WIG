import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "recoil-states",
  storage: sessionStorage,
});

export const LoginState = atom({
  key: "LoginStateKeyValue",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

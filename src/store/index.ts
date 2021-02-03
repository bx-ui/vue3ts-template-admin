import { createStore } from "vuex";
import Cookies from "js-cookie";
export interface RootState {
  token: string;
  username: string;
}
interface LoginParams {
  username: string;
  password: string;
}

export default createStore<RootState>({
  state: {
    token: "",
    username: ""
  },
  mutations: {
    saveUserInfo(state, obj: RootState) {
      state.token = obj.token;
      state.username = obj.username;
    }
  },
  actions: {
    loginIn({ commit }, obj: LoginParams) {
      return new Promise<void>((resolve, reject) => {
        setInterval(() => {
          const { username, password } = obj;
          if (username === "bingxin" && password === "123456") {
            commit("saveUserInfo", { token: "11111", username: "string" });
            Cookies.set("token", "11111");
            Cookies.set("username", "string");
            resolve();
          } else {
            reject();
          }
        }, 2000);
      });
    }
  }
});

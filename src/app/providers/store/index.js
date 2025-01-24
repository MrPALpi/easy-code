import { createStore } from "vuex";
import { charactersStore } from "./modules/charactersStore";


export const store = createStore({
  modules: {
    charactersStore
  }
})
import { Action, ActionContext, ActionTree } from "vuex";
import { StateInterface } from "../index";
import { PaymentStateInterface } from "./state";

const actions: ActionTree<PaymentStateInterface, StateInterface> = {
  getList(state: ActionContext<PaymentStateInterface, any>) {
    console.log("Helo");

    state.commit("setList");
  },

  initState(state: ActionContext<PaymentStateInterface, any>) {
    state.commit("initState");
  },
};

export default actions;

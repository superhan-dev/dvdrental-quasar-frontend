import { GetterTree } from "vuex";
import { StateInterface } from "../index";
import { PaymentStateInterface } from "./state";

const getters: GetterTree<PaymentStateInterface, StateInterface> = {
  someGetter(/* context */) {
    // your code
  },
};

export default getters;

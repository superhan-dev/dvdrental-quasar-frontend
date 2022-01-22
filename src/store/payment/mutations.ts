import { MutationTree } from "vuex";
import { PaymentStateInterface } from "./state";

const mutation: MutationTree<PaymentStateInterface> = {
  setList(state: PaymentStateInterface) {
    console.log("Hello2");

    state.list = [{ id: 1 }];
  },
  initState(state: PaymentStateInterface) {
    state.list = [];
  },
};

export default mutation;

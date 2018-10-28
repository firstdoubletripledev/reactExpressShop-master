import { Get_SLItem_In_Session, Add_Item_To_Cart } from "../actions/types";

const SLItemCartReducer = (SLItemCart = 0, action) => {
  switch (action.type) {
    case Get_SLItem_In_Session:
      return action.item;
    case Add_Item_To_Cart:
      return SLItemCart + 1;
    default:
      return SLItemCart;
  }
};

export default SLItemCartReducer;

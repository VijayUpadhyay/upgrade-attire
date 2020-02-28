import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
    //payload is not needed as it is just a toggle action.
});

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const addItemToCart = (availableCartItems, cartItemToAdd) => {
    const existingCartItem = availableCartItems.find(cartItem =>
        cartItem.id === cartItemToAdd.id
    );
    if (existingCartItem) {
        return availableCartItems.map(cartItem =>
            cartItem.id === existingCartItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
    }

    return [...availableCartItems, { ...cartItemToAdd, quantity: 1 }];
}
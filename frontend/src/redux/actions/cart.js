// add to cart
export const addTocart = (data) => async (dispatch, getState) => {
    dispatch({
      type: "addToCart",
      payload: data,
    });
  

    // using localstorage to store items of cart
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
    return data;
  };
  
  // remove from cart
  export const removeFromCart = (data) => async (dispatch, getState) => {

    // sending to reducer, the id of item to be deleted
    dispatch({
      type: "removeFromCart",
      payload: data._id,
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
    return data;
  };
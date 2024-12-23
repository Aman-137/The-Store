const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log(product);

    // tackle the existing product

    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );
    // console.log(existingProduct);

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;

          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }

          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // to set increment and decrement
  // Decrement
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount - 1;

        if (incAmount <= 1) {
          incAmount = 1;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  // Increment
  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;

        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );

    return {
      ...state,
      cart: updatedCart,
    };
  }

  // to clear the cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  // if (action.type === "CART_TOTAL_ITEM") {
  //   let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
  //     let { amount } = curElem;

  //     initialVal = initialVal + amount;
  //     return initialVal;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_item: updatedItemVal,
  //   };
  // }

  // if (action.type === "CART_TOTAL_PRICE") {
  //   let total_price = state.cart.reduce((initialVal, curElem) => {
  //     let { price, amount } = curElem;

  //     initialVal = initialVal + price * amount;

  //     return initialVal;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_price,
  //   };
  // }

  if (action.type === "CART_TOTAL_ITEM_AND_PRICE") {
    let { total_item, total_price } = state.cart.reduce(
      (accum, curElem) => {
        let { price, amount } = curElem;

        accum.total_item += amount;
        accum.total_price += price * amount;

        return accum;
      },
      {
        total_item: 0,
        total_price: 0,
      }
    );

    return {
      ...state,
      total_item,
      total_price,
    };
  }

  return state;
};

export default cartReducer;

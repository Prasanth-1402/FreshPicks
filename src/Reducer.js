// Load cart from localStorage
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('freshpicks_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error('Error loading cart from storage:', error);
    return [];
  }
};

// Save cart to localStorage
const saveCartToStorage = (cart) => {
  try {
    localStorage.setItem('freshpicks_cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart to storage:', error);
  }
};

export const initialState = {
  cart: loadCartFromStorage(),
};

export const getCartTotal = (cart) => {
  return cart?.reduce((amount, item) => item.price * item.quantity + amount, 0);
};

export const getCartItemCount = (cart) => {
  return cart?.reduce((count, item) => item.quantity + count, 0);
};

const reducer = (state, action) => {
  let newCart;

  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if item already exists in cart
      const existingIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === action.item.id
      );

      if (existingIndex >= 0) {
        // Item exists, increase quantity
        newCart = state.cart.map((item, index) =>
          index === existingIndex
            ? {...item, quantity: item.quantity + 1}
            : item
        );
      } else {
        // New item, add with quantity 1
        newCart = [...state.cart, {...action.item, quantity: 1}];
      }
      saveCartToStorage(newCart);
      return {
        ...state,
        cart: newCart,
      };

    case 'INCREASE_QUANTITY':
      newCart = state.cart.map((item) =>
        item.id === action.id ? {...item, quantity: item.quantity + 1} : item
      );
      saveCartToStorage(newCart);
      return {
        ...state,
        cart: newCart,
      };

    case 'DECREASE_QUANTITY':
      const itemToDecrease = state.cart.find((item) => item.id === action.id);
      if (itemToDecrease && itemToDecrease.quantity === 1) {
        // Remove item if quantity becomes 0
        newCart = state.cart.filter((item) => item.id !== action.id);
      } else {
        newCart = state.cart.map((item) =>
          item.id === action.id ? {...item, quantity: item.quantity - 1} : item
        );
      }
      saveCartToStorage(newCart);
      return {
        ...state,
        cart: newCart,
      };

    case 'REMOVE_FROM_CART':
      console.log('Removing From cart(Reducer)');
      newCart = state.cart.filter((cartItem) => cartItem.id !== action.id);
      saveCartToStorage(newCart);
      return {
        ...state,
        cart: newCart,
      };

    case 'EMPTY_CART':
      saveCartToStorage([]);
      return {
        ...state,
        cart: [],
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.address,
      };

    default:
      return state;
  }
};
export default reducer;

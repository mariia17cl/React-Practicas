import { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducers/cart'
// 1. crear contexto
export const CartContext = createContext()

export function useCartReducer () {
  // usamos el hook usereducer aquí
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)
  // dispatch, es la función que se encarga de enviar las acciones a reducer
  const addToCart = product =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })

  const removeFromCart = product =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product
    })

  const clearCart = () =>
    dispatch({
      type: 'CLEAR_CART'
    })
  return { state, addToCart, removeFromCart, clearCart }
}

// 2. crear provider

export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()
  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

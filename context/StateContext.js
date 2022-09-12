import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext()

export const StateContext = ({ children }) => {
    const [ShowCart, setShowCart] = useState(false)
    const [CartItems, setCartItems] = useState([])
    const [TotalPrice, setTotalPrice] = useState()
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [qty, setQty] = useState(1)

    const onAdd = (product, quantity) => {
        const ifInCart = CartItems.find((item) => item._id === product._id)

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

        if (ifInCart) {

            const updatedCartItems = CartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

            setCartItems(updatedCartItems)
        } else {
            product.quantity = quantity

            setCartItems([...CartItems, { ...product }])
        }
        toast.success(`${qty} ${product.name} added to cart.`)
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1)
    }

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1

            return prevQty - 1
        })
    }

    return (
        <Context.Provider
            value={{
                ShowCart,
                CartItems,
                TotalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty, 
                onAdd,
                setShowCart
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context) 
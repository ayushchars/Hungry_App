const initialState = {
    products: []
}

const carts = {
    cart: []
}
export const Productreducers = (state = initialState, action) => {
    if (action.type === "PRODUCT") {
        return { state, products: action.payload }
    }
    else { return state }
}
export const Selectedreducers = (state = carts, action) => {
    if (action.type === "SELECTED_PRODUCT") {

        const ItemIndex = state.cart.findIndex((item) => item.id === action.payload.id)
        if (ItemIndex >= 0) {
            state.cart[ItemIndex].qnty += 1
        }
        else {


            const temp = { ...action.payload, qnty: 1 }

            return {
                ...state,
                cart: [...state.cart, temp]

            }

        }
    }
    else {
        return state
    }
}

export const incrementReducers = (state = 0, action) => {
    if (action.type === "INCREMENT") {
        return state + action.payload

    }
    else if (action.type === "DECREMENT") {
        return state - action.payload
    }
    else return state
}
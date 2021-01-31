import { combineReducers } from 'redux'
import constants from './constants'

const userReducer = (state = { token: undefined }, action) => {
    switch (action.type) {
        case constants.SET_TOKEN: {
            return {
                ...state,
                token: action.payload,
            }
        }

        case constants.SET_USER: {
            return {
                ...state,
                user: action.payload,
            }
        }

        default:
            return state
    }
}

const loaderReducer = (state = { isLoading: false }, action) => {
    switch (action.type) {
        case constants.SET_LOADER: {
            return {
                ...state,
                isLoading: action.payload,
            }
        }

        default:
            return state
    }
}

const errorReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.SET_LOGIN_ERROR: {
            return {
                ...state,
                loginError: action.payload,
            }
        }

        case constants.CLEAR_LOGIN_ERROR: {
            return {
                ...state,
                loginError: {},
            }
        }

        default:
            return state
    }
}

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case constants.CART_ADD: {
            let alreadyInCart = state.find(
                (item) => item._id === action.payload._id
            )
            if (!alreadyInCart) {
                return [...state, { ...action.payload, quantity: 1 }]
            }
            return state
        }

        case constants.CART_CLEAR: {
            return []
        }

        case constants.CART_UPDATE_QUANTITY: {
            let newState = state.map((item) => {
                if (item._id === action.payload._id) {
                    return { ...item, quantity: action.payload.quantity }
                }
                return item
            })
            return newState
        }

        case constants.CART_REMOVE_ITEM: {
            let newState = state.filter((item) => item._id !== action.payload)
            return newState
        }

        default:
            return state
    }
}

export default combineReducers({
    user: userReducer,
    loader: loaderReducer,
    error: errorReducer,
    cart: cartReducer,
})

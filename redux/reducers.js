import { combineReducers } from 'redux';
import constants from "./constants";

const userReducer = (state = { token: undefined }, action) => {
    switch (action.type) {
        case constants.SET_TOKEN: {
            return {
                ...state,
                token: action.payload
            }
        }

        case constants.SET_USER: {
            return {
                ...state,
                user: action.payload
            }
        }

        default:
            return state
    }
};

const loaderReducer = (state = { isLoading: false }, action) => {
    switch (action.type) {
        case constants.SET_LOADER: {
            return {
                ...state,
                isLoading: action.payload
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
                loginError: action.payload
            }
        }

        case constants.CLEAR_LOGIN_ERROR: {
            return {
                ...state,
                loginError: {}
            }
        }

        default:
            return state
    }
}

export default combineReducers({
    user: userReducer,
    loader: loaderReducer,
    error: errorReducer,
});
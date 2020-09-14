import { getData, storeData, removeData } from '../utils/asyncStorage'
import constants from './constants'

export const retrieveUser = () => {
    return async dispatch => {
        dispatch(setLoader(true))
        const token = await getData('token')
        dispatch({
            type: constants.SET_TOKEN,
            payload: JSON.parse(token)
        })
        setTimeout(() => {
            dispatch(setLoader(false))
        }, 1000)
    }
}


export const login = (body) => {
    return async dispatch => {
        dispatch(setLoader(true))
        fetch('https://homechef-beta.herokuapp.com/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json().then(async user => {
            if (user.success) {
                const modifiedToken = user.token.substring(1, user.token.length - 1)
                const isStored = await storeData('token', modifiedToken)
                console.log(user)
                dispatch({
                    type: constants.SET_TOKEN,
                    payload: modifiedToken
                })
                dispatch({
                    type: constants.CLEAR_LOGIN_ERROR,
                })
            } else {
                dispatch({
                    type: constants.SET_LOGIN_ERROR,
                    payload: user
                })
            }
            setTimeout(() => {
                dispatch(setLoader(false))
            }, 1000)
        }))
    }
}

export const signOut = () => {
    return async dispatch => {
        dispatch(setLoader(true))
        await removeData('token')
        dispatch({
            type: constants.SET_TOKEN,
            payload: null
        })
        setTimeout(() => {
            dispatch(setLoader(false))
        }, 1000)
    }
}

export const setLoader = (isLoading) => {
    return async dispatch => {
        dispatch({
            type: constants.SET_LOADER,
            payload: isLoading
        })
    }
}
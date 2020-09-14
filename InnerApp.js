import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Main from './screens/main/Main';
import Auth from './screens/auth/Auth'
import { retrieveUser, setLoader } from './redux/actions'
import Loader from './screens/Loader'

const InnerApp = () => {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.user.token)
    const isLoading = useSelector(state => state.loader.isLoading)

    useEffect(() => {
        dispatch(retrieveUser())
    }, [])

    return (
        <View style={styles.container}>
            {isLoading ? <Loader /> :
                token ? <Main /> : <Auth />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default InnerApp
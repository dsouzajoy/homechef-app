import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { signOut } from '../../../redux/actions'
import { useDispatch } from 'react-redux'
const Account = () => {
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { dispatch(signOut()) }} style={styles.button}>
                <Text style={{ color: 'white' }}>
                    Sign out
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        backgroundColor: 'dodgerblue',
        padding: 20,
        borderRadius: 5,
        elevation: 5
    }
})

export default Account
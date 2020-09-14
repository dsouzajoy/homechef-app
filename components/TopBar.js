import React from 'react'
import { View, StyleSheet, Text } from "react-native"

const TopBar = ({ title }) => {
    return (
        <View style={defaultStyles.bar}>
            <Text style={defaultStyles.title}>{title}</Text>
        </View>
    )
}

const defaultStyles = StyleSheet.create({
    bar: {
        backgroundColor: '#fff',
        height: 65,
        maxHeight: 65,
        elevation: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        color: '#25D366',
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default TopBar
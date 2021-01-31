import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const EmptyView = ({ type, onPress, buttonText, errorText, showButton }) => {
    return (
        <View style={defaultStyles.container}>
            {type.toLowerCase() === 'cart' && (
                <Image
                    style={defaultStyles.image}
                    source={require('../assets/emptyCart.png')}
                />
            )}
            {type.toLowerCase() === 'menu' && (
                <Image
                    style={defaultStyles.image}
                    source={require('../assets/outOfService.png')}
                />
            )}
            <Text style={defaultStyles.text}>{errorText}</Text>
            {showButton && (
                <TouchableOpacity onPress={onPress}>
                    <View style={defaultStyles.button}>
                        <Text style={defaultStyles.buttonText}>
                            {buttonText}
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    )
}

const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 170,
        height: 170,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#777',
        marginHorizontal: 20,
        textAlign: 'center',
    },
    button: {
        padding: 8,
        borderColor: '#25D366',
        borderWidth: 2,
        marginTop: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#25D366',
    },
})

export default EmptyView

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const QuantityComponent = ({
    quantity,
    onIncrement,
    onDecrement,
    customStyles,
}) => {
    return (
        <View style={[defaultStyles.container, customStyles]}>
            <TouchableOpacity onPress={onDecrement}>
                <View style={[defaultStyles.button, defaultStyles.buttonLeft]}>
                    <Text
                        style={[
                            defaultStyles.buttonText,
                            { color: quantity === 1 ? 'red' : 'black' },
                        ]}
                    >
                        -
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={defaultStyles.quantityWrapper}>
                <Text style={defaultStyles.quantityText}>{quantity}</Text>
            </View>
            <TouchableOpacity onPress={onIncrement}>
                <View style={[defaultStyles.button, defaultStyles.buttonRight]}>
                    <Text style={defaultStyles.buttonText}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const defaultStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 7,
        margin: 10,
        maxHeight: 30,
        minWidth: 60,
    },
    quantityWrapper: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    quantityText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 20,
        borderColor: '#bbb',
        maxHeight: 30,
        flex: 1,
    },
    buttonLeft: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderRightWidth: 1,
    },
    buttonRight: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderLeftWidth: 1,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 14,
    },
})

export default QuantityComponent

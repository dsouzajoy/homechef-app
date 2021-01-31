/*
prop value for rightIcon or leftIcon must and should be a fontAwesome icon name
*/

import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'

const TopBar = ({ title, rightIcon, rightIconOnClick }) => {
    return (
        <View style={defaultStyles.bar}>
            <Text style={defaultStyles.title}>{title}</Text>
            {rightIcon ? (
                <TouchableOpacity onPress={rightIconOnClick}>
                    {rightIcon && (
                        <Icon name={rightIcon} size={30} color={'black'} />
                    )}
                </TouchableOpacity>
            ) : null}
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
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: '700',
        fontSize: 20,
    },
})

export default TopBar

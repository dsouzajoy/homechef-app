import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const ListCard = ({ imageSrc, title, subtitle }) => {
    return (
        <TouchableOpacity onPress={() => { alert('This is ' + title + '\n' + subtitle) }}>
            <View style={defaultStyles.container}>
                <Image source={{ uri: imageSrc }} style={defaultStyles.image} />
                <View style={defaultStyles.info}>
                    {title && (<Text style={defaultStyles.title}>{title}</Text>)}
                    {subtitle && (<Text>{subtitle}</Text>)}
                </View>
            </View>
        </TouchableOpacity>
    )
}

const defaultStyles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        flexDirection: 'row',
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5
    },
    info: {
        marginLeft: 10,
    }
})

export default ListCard
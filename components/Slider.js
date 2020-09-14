import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from "react-native";

const Slide = ({ imageSrc, slideTitle, slideSubtitle }) => {
    return (
        <TouchableOpacity onPress={() => { alert('Detailed View for ' + slideTitle) }}>
            <ImageBackground
                source={{ uri: imageSrc }}
                style={defaultStyles.image}
                imageStyle={{ borderRadius: 10 }}
            >
                <View style={[defaultStyles.overlay]}></View>
                <Text style={[defaultStyles.slideTitle]}>{slideTitle}</Text>
                <Text style={[defaultStyles.slideSubTitle]}>{slideSubtitle}</Text>
            </ImageBackground >
        </TouchableOpacity>
    )
}

const Slider = () => {
    return (
        <View style={[defaultStyles.sliderContainer]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Slide slideTitle="Grandma's Cookies" slideSubtitle='Fresh baked home made cookies now available!' imageSrc='https://images.unsplash.com/photo-1560910615-9eaa2e704e63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' />
                <Slide slideTitle='50% off on Jalebis!' slideSubtitle="Discounts on Jalebis from Malya's Kitchen" imageSrc='https://images.unsplash.com/photo-1572314368000-3aa54c197ec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' />
                <Slide slideTitle="Samosa Love" slideSubtitle="Enjoy the monsoon with hot Samosas" imageSrc='https://images.unsplash.com/photo-1589301773859-bb024d3ad558?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' />
            </ScrollView>
        </View >
    )
}

const defaultStyles = StyleSheet.create({
    sliderContainer: {
        backgroundColor: '#fff',
        minHeight: 150,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    slideTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    slideSubTitle: {
        fontSize: 18,
        color: '#fff',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        flex: 1,
        alignSelf: 'stretch',
        textAlign: 'center',
        elevation: 5,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        padding: 10,
        maxWidth: 250,
        marginHorizontal: 5
    },
    overlay: {
        position: 'absolute',
        flex: 1,
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 10
    }
})

export default Slider
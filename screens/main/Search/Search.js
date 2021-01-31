import React from 'react'
import { View, Text, StyleSheet, StatusBar, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const search = () => {
    return (
        <View
            style={[
                defaultStyles.container,
                { paddingTop: StatusBar.currentHeight },
            ]}
        >
            <View style={defaultStyles.searchBar}>
                <Icon name="search" color={'#ccc'} size={22} />

                <TextInput
                    style={defaultStyles.input}
                    placeholder="Try Kori Rotti...."
                    placeholderTextColor="#aaa"
                    // keyboardType="email-address"
                    // onSubmitEditing={() => {
                    //     passRef.current.focus()
                    // }}
                    // blurOnSubmit={false}
                    // value={email}
                    // onChangeText={(text) => {
                    //     setEmail(text)
                    // }}
                />
            </View>
        </View>
    )
}

const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // backgroundColor: 'yellow'
    },
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 10,
        marginVertical: 15,
        marginHorizontal: 18,
        padding: 10,
    },
    input: {
        textAlign: 'center',
        color: 'black',
        marginLeft: 10,
    },
})

export default search

import React, { useEffect } from 'react'
import { Text, View, FlatList, StyleSheet, ToastAndroid } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ListCard from '../../../../components/ListCard'
import { addItemToCart } from '../../../../redux/actions'
import EmptyView from '../../../../components/EmptyView'

const DetailedView = ({ route, navigation }) => {
    const { menu } = route.params
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const addToCart = (item) => {
        dispatch(addItemToCart(item))
    }

    const isInCart = (itemId) => {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i]._id === itemId) {
                return true
            }
        }
        return false
    }

    return (
        <View style={defaultStyles.container}>
            {menu.items.length > 0 ? (
                <View>
                    <FlatList
                        ListHeaderComponent={
                            <View style={defaultStyles.listHeader}>
                                <Text style={defaultStyles.listHeaderTitle}>
                                    {menu.name}
                                </Text>
                                <Text style={defaultStyles.listHeaderSubtitle}>
                                    {menu.description}
                                </Text>
                            </View>
                        }
                        data={menu.items}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => (
                            <ListCard
                                imageSrc="https://images.unsplash.com/photo-1562166437-24ebf08f28be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                                title={item.name}
                                subtitle={item.categories}
                                price={item.price}
                                foodType={item.type}
                                onPressHandler={() => {
                                    addToCart(item)
                                }}
                                showAddButton
                                isInCart={isInCart(item._id)}
                            />
                        )}
                    />
                </View>
            ) : (
                <EmptyView
                    type="menu"
                    errorText="This vendor is out of service at the moment"
                />
            )}
        </View>
    )
}

const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    listHeader: {
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    listHeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textTransform: 'uppercase',
    },
    listHeaderSubtitle: {
        textAlign: 'center',
    },
})

export default DetailedView

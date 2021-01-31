import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ToastAndroid,
    FlatList,
    StatusBar,
    TouchableNativeFeedback,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {
    clearCart,
    updateCartItemQuantity,
    removeFromCart,
} from '../../../redux/actions'
import ListCard from '../../../components/ListCard'
import TopBar from '../../../components/TopBar'
import EmptyView from '../../../components/EmptyView'
import { roundToTwo } from '.././../../utils/helpers'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'

const Cart = ({ navigation }) => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const [totalAmount, setTotalAmount] = useState(0)
    const [totalPayable, setTotalPayable] = useState(0)
    const GST = 8 //harcoded
    const DELIVERY_CHARGE = 40 //hardcoded

    const emptyCart = () => {
        dispatch(clearCart())
        ToastAndroid.show('Cart is Cleared', ToastAndroid.SHORT)
    }

    const onQuantityIncrement = (item) => {
        dispatch(updateCartItemQuantity(item))
    }

    const onQuantityDecrement = (item) => {
        if (item.quantity > 0) {
            dispatch(updateCartItemQuantity(item))
        } else {
            dispatch(removeFromCart(item._id))
        }
    }

    const getTotalPrice = () => {
        let payableAmount = 0
        cart.forEach((item) => {
            payableAmount += item.price * item.quantity
        })
        return payableAmount
    }

    const getTotalPayableAmount = () => {
        let amount = getTotalPrice()
        amount += roundToTwo(amount * (GST / 100))
        amount += DELIVERY_CHARGE
        return getTotalPayableAmount
    }

    useEffect(() => {
        const getTotalAmount = () => {
            let amount = 0
            cart.forEach((item) => {
                amount += item.price * item.quantity
            })
            setTotalAmount(amount)
        }
        getTotalAmount()
    }, [cart])

    useEffect(() => {
        const getTotalPayableAmount = () => {
            let payable = totalAmount
            payable += roundToTwo(payable * (GST / 100))
            payable += DELIVERY_CHARGE
            setTotalPayable(payable)
        }
        getTotalPayableAmount()
    }, [totalAmount])

    return (
        <View
            style={[styles.container, { paddingTop: StatusBar.currentHeight }]}
        >
            <TopBar title="Cart" />
            {cart.length > 0 ? (
                <>
                    <FlatList
                        data={cart}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => (
                            <ListCard
                                imageSrc="https://images.unsplash.com/photo-1562166437-24ebf08f28be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                                title={item.name}
                                subtitle={item.categories}
                                price={item.price}
                                foodType={item.type}
                                quantity={item.quantity}
                                onQuantityIncrement={() => {
                                    onQuantityIncrement({
                                        _id: item._id,
                                        quantity: item.quantity + 1,
                                    })
                                }}
                                onQuantityDecrement={() => {
                                    onQuantityDecrement({
                                        _id: item._id,
                                        quantity: item.quantity - 1,
                                    })
                                }}
                                touchDisabled={true}
                            />
                        )}
                        ListFooterComponent={
                            <View style={{ paddingVertical: 20 }}>
                                <View style={styles.bill}>
                                    <View style={[styles.billColumn]}>
                                        <Text style={styles.billItem}>
                                            Amount
                                        </Text>
                                        <Text style={styles.billPrice}>
                                            {'₹ '}
                                            {totalAmount}
                                        </Text>
                                    </View>
                                    <View style={[styles.billColumn]}>
                                        <Text style={styles.billItem}>GST</Text>
                                        <Text style={styles.billPrice}>
                                            {GST + '%'}
                                        </Text>
                                    </View>
                                    <View style={[styles.billColumn]}>
                                        <Text style={styles.billItem}>
                                            Delivery Charges
                                        </Text>
                                        <Text style={styles.billPrice}>
                                            {'₹ '}
                                            {DELIVERY_CHARGE}
                                        </Text>
                                    </View>
                                    <View
                                        style={[
                                            styles.billColumn,
                                            styles.lastColumn,
                                        ]}
                                    >
                                        <Text style={styles.billItem}>
                                            Total Amount
                                        </Text>
                                        <Text
                                            style={[
                                                styles.billPrice,
                                                styles.billTotalAmount,
                                            ]}
                                        >
                                            {'₹ '}
                                            {totalPayable}
                                        </Text>
                                    </View>
                                </View>
                                <TouchableNativeFeedback
                                    onPress={() =>
                                        alert(
                                            '---order API to be called here---'
                                        )
                                    }
                                >
                                    <View
                                        style={[
                                            styles.button,
                                            styles.placeOrderButton,
                                        ]}
                                    >
                                        <Text style={styles.buttonText}>
                                            Place order
                                        </Text>
                                    </View>
                                </TouchableNativeFeedback>
                                <TouchableNativeFeedback onPress={emptyCart}>
                                    <View
                                        style={[
                                            styles.button,
                                            styles.clearCartButton,
                                        ]}
                                    >
                                        <Text style={styles.buttonText}>
                                            Clear Cart
                                        </Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        }
                    />
                </>
            ) : (
                <EmptyView
                    type="cart"
                    onPress={() => navigation.navigate('Home')}
                    showButton={true}
                    buttonText="Add Items"
                    errorText="No items in the cart"
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    button: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 2,
        width: '90%',
        alignSelf: 'center',
        marginTop: 15,
    },
    clearCartButton: {
        backgroundColor: '#D9534F',
    },
    placeOrderButton: {
        backgroundColor: '#25D666',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    bill: {
        width: '90%',
        alignSelf: 'center',
        borderStyle: 'dotted',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#bbb',
        padding: 8,
    },
    billColumn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    billItem: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    billTotalAmount: {
        color: '#25D666',
        fontSize: 18,
    },
    billPrice: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    lastColumn: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingTop: 8,
        marginTop: 8,
    },
})

export default Cart

import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import QuantityComponent from './QuantityComponent'

const ListCard = ({
    imageSrc,
    title,
    subtitle,
    onPressHandler,
    price,
    foodType,
    showAddButton,
    isInCart,
    quantity,
    onQuantityIncrement,
    onQuantityDecrement,
    touchDisabled,
    customComponent,
}) => {
    return (
        <TouchableOpacity onPress={onPressHandler} disabled={touchDisabled}>
            <View style={defaultStyles.container}>
                {imageSrc ? (
                    <Image
                        source={{ uri: imageSrc }}
                        style={defaultStyles.image}
                    />
                ) : null}
                <View style={defaultStyles.info}>
                    {foodType === 'veg' && (
                        <View
                            style={[
                                defaultStyles.foodTypeIcon,
                                { borderColor: 'green' },
                            ]}
                        >
                            <Icon
                                name="circle"
                                style={{ color: 'green' }}
                                size={7}
                            />
                        </View>
                    )}
                    {foodType === 'nonveg' && (
                        <View
                            style={[
                                defaultStyles.foodTypeIcon,
                                { borderColor: '#CD3333' },
                            ]}
                        >
                            <Icon
                                name="circle"
                                style={{ color: '#CD3333' }}
                                size={7}
                            />
                        </View>
                    )}
                    {title && (
                        <Text
                            numberOfLines={1}
                            ellipsizeMode="tail"
                            style={defaultStyles.title}
                        >
                            {title}
                        </Text>
                    )}
                    {subtitle && (
                        <Text
                            numberOfLines={2}
                            ellipsizeMode="tail"
                            style={defaultStyles.subtitle}
                        >
                            {subtitle}
                        </Text>
                    )}
                    {price && (
                        <Text style={defaultStyles.price}>{'₹ ' + price}</Text>
                    )}
                    {customComponent && <>{customComponent}</>}
                </View>
                {showAddButton && (
                    <View style={defaultStyles.addBtnWrapper}>
                        {isInCart ? (
                            <Text
                                style={[
                                    defaultStyles.addBtn,
                                    defaultStyles.addBtnInverted,
                                ]}
                            >{` ADDED ✓ `}</Text>
                        ) : (
                            <Text style={[defaultStyles.addBtn]}>
                                {' ADD + '}
                            </Text>
                        )}
                    </View>
                )}
                {isFinite(quantity) && (
                    <QuantityComponent
                        customStyles={{ alignSelf: 'center' }}
                        quantity={quantity}
                        onIncrement={onQuantityIncrement}
                        onDecrement={onQuantityDecrement}
                    />
                )}
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
        textTransform: 'capitalize',
        fontSize: 18,
    },
    subtitle: {
        color: '#7e808c',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    info: {
        marginLeft: 10,
        flex: 1,
        flexGrow: 1,
    },
    price: {
        fontSize: 12,
    },
    foodTypeIcon: {
        borderWidth: 1.8,
        width: 14,
        height: 14,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 1,
    },
    addBtnWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    addBtn: {
        color: 'green',
        padding: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'green',
        fontWeight: 'bold',
    },
    addBtnInverted: {
        color: 'white',
        backgroundColor: 'green',
    },
})

export default ListCard

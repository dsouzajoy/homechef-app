import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Account from './Account'
import Home from './Home'
import Search from './Search'
import Cart from './Cart'
import { NavigationContainer } from '@react-navigation/native'

const Main = () => {
    const BottomTab = createMaterialBottomTabNavigator()

    return (
        <View style={styles.container}>
            <NavigationContainer>
                <BottomTab.Navigator
                    shifting={true}
                    activeColor="#25D366"
                    inactiveColor="#aaa"
                    barStyle={{ backgroundColor: '#ffff' }}
                >
                    <BottomTab.Screen
                        name="Home"
                        component={Home}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color }) => (
                                <Icon name="home" color={color} size={22} />
                            ),
                        }}
                    />
                    <BottomTab.Screen
                        name="Search"
                        component={Search}
                        options={{
                            tabBarLabel: 'Search',
                            tabBarIcon: ({ color }) => (
                                <Icon name="search" color={color} size={22} />
                            ),
                        }}
                    />
                    <BottomTab.Screen
                        name="Cart"
                        component={Cart}
                        options={{
                            tabBarLabel: 'Cart',
                            tabBarIcon: ({ color }) => (
                                <Icon
                                    name="shopping-cart"
                                    color={color}
                                    size={22}
                                />
                            ),
                        }}
                    />
                    <BottomTab.Screen
                        name="Account"
                        component={Account}
                        options={{
                            tabBarLabel: 'Account',
                            tabBarIcon: ({ color }) => (
                                <Icon name="user" color={color} size={22} />
                            ),
                        }}
                    />
                </BottomTab.Navigator>
            </NavigationContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    IconButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'dodgerblue',
        elevation: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        margin: 10,
    },
})

export default Main

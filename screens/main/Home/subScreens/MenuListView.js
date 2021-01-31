import React, { useEffect, useState, useCallback } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from 'react-native'
import Slider from '../../../../components/Slider'
import { useSelector } from 'react-redux'
import ListCard from '../../../../components/ListCard'

const MenuListView = (props) => {
    const [menuList, setMenuList] = useState([])
    const token = useSelector((state) => state.user.token)

    const getMenus = useCallback(async () => {
        let res = await fetch(
            'https://homechef-beta.herokuapp.com/api/v1/menus',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.stringify(token)}`,
                    Cookie: `token=${token}`,
                },
            }
        )
        res = await res.json()
        setMenuList(res.data)
    }, [token])

    useEffect(() => {
        getMenus()
    }, [])

    const onPressHandler = (id) => {
        const menu = menuList.find((menu) => menu._id === id)
        props.navigation.navigate('DetailedView', { menu: menu })
    }

    return (
        <View style={[styles.container]}>
            <Text style={styles.welcomeText}>
                Welcome, <Text style={{ fontWeight: 'bold' }}>Username</Text>
            </Text>
            <Slider />
            <Text style={[styles.sectionTitle, { marginLeft: 20 }]}>
                Explore
            </Text>
            {menuList.length > 0 ? (
                <FlatList
                    data={menuList}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <ListCard
                            imageSrc="https://images.unsplash.com/photo-1562166437-24ebf08f28be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                            title={item.name}
                            subtitle={item.description}
                            onPressHandler={() => onPressHandler(item._id)}
                        />
                    )}
                />
            ) : (
                <ActivityIndicator color="#25D366" />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    welcomeText: {
        fontSize: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default MenuListView

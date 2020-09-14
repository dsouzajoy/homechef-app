import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, StyleSheet, StatusBar, FlatList, ActivityIndicator } from 'react-native'
import TopBar from '../../components/TopBar'
import Slider from '../../components/Slider'
import { useSelector } from 'react-redux'
import ListCard from '../../components/ListCard'

const Home = () => {
    const token = useSelector(state => state.user.token)
    const [menuList, setMenuList] = useState([])


    const getMenus = useCallback(async () => {
        let res = await fetch('https://homechef-beta.herokuapp.com/api/v1/menus', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.stringify(token)}`,
                'Cookie': `token=${token}`
            }
        })
        res = await res.json()
        setMenuList(res.data)
    }, [token])

    useEffect(() => {
        getMenus()
    }, [])

    return (
        <View style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
            <TopBar title="Home" />
            <Text style={styles.welcomeText}>Welcome, <Text style={{ fontWeight: 'bold' }}>Shubham</Text></Text>
            <Slider />
            <Text style={[styles.sectionTitle, { marginLeft: 20 }]}>Explore</Text>
            {menuList.length > 0 ? (
                <FlatList data={menuList} keyExtractor={item => item._id} renderItem={({ item }) => <ListCard imageSrc='https://images.unsplash.com/photo-1562166437-24ebf08f28be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' title={item.name} subtitle={item.description} />} />
            ) : (<ActivityIndicator color='#25D366' />)}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    welcomeText: {
        fontSize: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Home
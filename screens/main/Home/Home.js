import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DetailedView from './subScreens/DetailedView'
import MenuListView from './subScreens/MenuListView'

const Home = () => {
    const HomeStack = createStackNavigator()

    return (
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen name="Home" component={MenuListView} options={{headerTitle: "HoMeals"}}/>
            <HomeStack.Screen name="DetailedView" component={DetailedView} options={{headerTitle: ""}}/>
        </HomeStack.Navigator>
    )
}

export default Home

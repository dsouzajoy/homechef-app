import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const AuthStack = createStackNavigator()

const Auth = () => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <AuthStack.Screen name="Login" component={Login} />
                <AuthStack.Screen name="Register" component={Signup} />
            </AuthStack.Navigator>
        </NavigationContainer>
    )
}

export default Auth
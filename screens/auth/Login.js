import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    View,
    Text,
    ScrollView,
    TextInput,
    ImageBackground,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'
import { login } from '../../redux/actions/'

const Login = ({ navigation }) => {
    const passRef = useRef()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginError = useSelector(state => state.error.loginError)

    return (
        <ImageBackground
            source={require('../../assets/bkg2.jpg')}
            style={styles.image}
        >
            <ScrollView contentContainerStyle={styles.overlay}>
                <Text style={styles.brand}>Homechef</Text>
                <View style={styles.form}>
                    {loginError ? <Text style={{ marginBottom: 20, color: 'rgb(255, 40, 0)', fontSize: 20, backgroundColor: 'rgba(255, 255, 255, 0.6)' }}> {loginError.error}</Text> : null}
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="gray"
                        keyboardType="email-address"
                        onSubmitEditing={() => {
                            passRef.current.focus()
                        }}
                        blurOnSubmit={false}
                        value={email}
                        onChangeText={(text) => {
                            setEmail(text)
                        }}
                    />

                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Password"
                        placeholderTextColor="gray"
                        ref={passRef}
                        value={password}
                        onChangeText={(text) => {
                            setPassword(text)
                        }}
                    />
                    <TouchableOpacity
                        style={styles.mainButton}
                        onPress={() => {
                            dispatch(login({ email, password }))
                        }}
                    >
                        <Text style={styles.mainButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.bottomText}
                    onPress={() => {
                        navigation.push('Register')
                    }}
                >
                    <Text style={styles.buttonText}>
                        Don't have an account?{' '}
                        <Text style={{ fontWeight: 'bold', color: '#25D366' }}>
                            Register here
                        </Text>
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    )
}

export default Login
